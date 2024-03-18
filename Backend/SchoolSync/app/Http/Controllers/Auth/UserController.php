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
    public function registration(RegistrationRequest $request){
        $user = new User();
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
}
