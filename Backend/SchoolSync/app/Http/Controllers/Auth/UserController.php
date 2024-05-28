<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{


    public function registration(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // max 2MB
            'address' => 'nullable|string|max:255',
            'contact' => 'nullable|string|max:255',
        ]);
        $nameInitials = strtoupper(substr($request->name, 0, 2));
        $registrationMonth = date('m');
        $suffix = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
        $studentId = $nameInitials . $registrationMonth . $suffix;
        while (User::where('student_id', $studentId)->exists()) {
            $suffix = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
            $studentId = $nameInitials . $registrationMonth . $suffix;
        }
        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $imageName = $studentId . '_' . time() . '.' . $extension;
            $imagePath = $image->storeAs('images', $imageName, 'public');
        }

        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->student_id = $studentId;
        $user->image = asset('storage/' . $imagePath);
        $user->address = $request->address;
        $user->contact = $request->contact;
        $user->save();

        return response()->json([
            'message' => 'Registered Successfully',
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null
        ]);
    }



    public function login(LoginRequest $request){
        $input = $request->all();
        if(Auth::guard('user')->attempt(['email'=>$input['email'],'password'=>$input['password']])){
            $user = Auth::guard('user')->user();
            $token = $user->createToken('user-token', ['user'])->plainTextToken;
            return response()->json([
                'token' => $token
            ]);

        }else{
            return response()->json([
                'message'=>'Incorrect email or password'
            ]);
        }
    }
    public function getDetails(){
        $user = Auth::user();

        return response()->json([
            'data'=>$user
        ]);
    }
    public function logout(){
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function checkAbility(Request $request)
    {
        if ($request->has('token')) {
            $tokenValue = $request->input('token');
            $token = PersonalAccessToken::findToken($tokenValue);

            if ($token) {
                $abilities = $token->abilities;

                return response()->json(['abilities' => $abilities]);
            } else {
                return response()->json(['message' => 'Token is invalid or not found.']);
            }
        } else {
            return response()->json(['message' => 'Token not provided.']);
        }
    }

}
