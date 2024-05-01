<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnrollmentController extends Controller
{
    public function enroll($id){
        $enrollment = new Enrollment();
        $enrollment->course_id = $id;
        $enrollment->user_id = Auth()->user()->id;
        $enrollment->save();
        return response()->json([
            'message' => 'Successfully Enrolled'
        ]);
    }
    public function getEnrolledCourses()
    {
        // Retrieve enrolled courses for the authenticated user
        $userId = auth()->id();
        $enrolledCourses = Enrollment::with('course')->where('user_id', $userId)->get();

        // Return enrolled courses as JSON response
        return response()->json($enrolledCourses);
    }
}
