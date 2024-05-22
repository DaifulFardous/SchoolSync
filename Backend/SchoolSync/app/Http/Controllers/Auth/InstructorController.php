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
        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:instructors',
            'password' => 'required|string|min:8',
        ]);
            // Create a new instance of the Instructor model
            $instructor = new Instructor();
            // Assign values to the model properties
            $instructor->name = $request->name;
            $instructor->email = $request->email;
            $instructor->password = bcrypt($request->password);
            $instructor->save();

            // Return a JSON response indicating success
            return response()->json([
                'message' => 'Registered Successfully'
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
