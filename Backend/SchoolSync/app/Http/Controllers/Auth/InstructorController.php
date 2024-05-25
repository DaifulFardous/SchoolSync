<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Instructor;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class InstructorController extends Controller
{
    public function registration(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:instructors',
            'password' => 'required|string|min:8',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imageName = time().'.'.$request->image->extension();
        $request->image->storeAs('instructors', $imageName, 'public');

        $instructor = new Instructor();
        $instructor->name = $request->name;
        $instructor->email = $request->email;
        $instructor->password = bcrypt($request->password);
        $instructor->image_url = asset('storage/' . $imageName);
        $instructor->save();

        return response()->json([
            'message' => 'Registered Successfully',
            'image_url' => $instructor->image_url,
        ]);
    }

    public function login(Request $request)
    {
        $input = $request->all();
        if (Auth::guard('instructor')->attempt(['email' => $input['email'], 'password' => $input['password']])) {
            $user = Auth::guard('instructor')->user();
            $token = $user->createToken('instructor-token', ['instructor'])->plainTextToken;
            return response()->json([
                'token' => $token
            ]);
        } else {
            return response()->json([
                'message' => 'Incorrect email or password'
            ]);
        }
    }

    public function getDetails()
    {
        $user = Auth::user();

        return response()->json([
            'data' => $user
        ]);
    }
}