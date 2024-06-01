<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\LoginRequest;
use App\Models\Course;
use App\Models\Instructor;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function registration(RegistrationRequest $request){
        $user = new Admin();
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
        if(Auth::guard('admin')->attempt(['email'=>$input['email'],'password'=>$input['password']])){
            $user = Auth::guard('admin')->user();
            $token = $user->createToken('admin-token', ['admin'])->plainTextToken;
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
    public function getAllInstructor(){
        $instructors = Instructor::all();
        return response()->json($instructors);
    }
    public function getAllUser(){
        $users = User::all();
        return response()->json($users);
    }
    public function totalUsers(){
        $users = User::all();
        return response()->json($users);
    }
    public function totalInstructors(){
        $instructors = Instructor::all();
        return response()->json($instructors);
    }
    public function totalAdmins(){
        $admins = Admin::all();
        return response()->json($admins);
    }
    public function totalCourses(){
        $courses = Course::all();
        return response()->json($courses);
    }
}
