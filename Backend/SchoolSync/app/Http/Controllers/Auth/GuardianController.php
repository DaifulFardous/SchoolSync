<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Guardian;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class GuardianController extends Controller
{
    public function registration(RegistrationRequest $request){
        $user = new Guardian();
        $user->user_id = $request->user_id;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'message'=>'Registered Successfully'
        ]);
    }
    public function login(LoginRequest $request){
        $input = $request->all();
        if(Auth::guard('guardian')->attempt(['email'=>$input['email'],'password'=>$input['password']])){
            $user = Auth::guard('guardian')->user();
            $token = $user->createToken('guardian-token', ['guardian'])->plainTextToken;
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
        $child = User::find($user->id);

        return response()->json([
            'data'=>$user,
            'child'=>$child
        ]);
    }
}