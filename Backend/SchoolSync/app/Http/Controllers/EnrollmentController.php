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
}
