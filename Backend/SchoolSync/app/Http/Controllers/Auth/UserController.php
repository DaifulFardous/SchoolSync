<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    

    public function registration(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins',
            'password' => 'required|string|min:8',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // max 2MB
            'address' => 'nullable|string|max:255',
            'contact' => 'nullable|string|max:255',
        ]);        
        // Get the first two letters of the name (converted to uppercase)
         $nameInitials = strtoupper(substr($request->name, 0, 2));

        // Get the month of registration (as two digits)
        $registrationMonth = date('m');

        // Generate a unique 4-digit suffix
        $suffix = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);

        // Combine the components to form the final student_id
        $studentId = $nameInitials . $registrationMonth . $suffix;

        // Check if student_id already exists, if so, regenerate
        while (User::where('student_id', $studentId)->exists()) {
            $suffix = str_pad(mt_rand(0, 9999), 4, '0', STR_PAD_LEFT);
            $studentId = $nameInitials . $registrationMonth . $suffix;
        }


        // Handle image upload (if any)
        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension(); // Get the original extension
            $imageName = $studentId . '_' . time() . '.' . $extension; 
            $imagePath = $image->storeAs('images', $imageName, 'public');
        }

        // Create a new instance of the Admin model
        $user = new User();

        // Assign values to the model properties
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->student_id = $studentId; // Assign the generated student_id
        $user->image = $imagePath; // Add image path
        $user->address = $request->address; // Add address
        $user->contact = $request->contact; // Add contact

        // Save the model to the database
        $user->save();

        // Return a JSON response indicating success
        return response()->json([
            'message' => 'Registered Successfully'
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
}