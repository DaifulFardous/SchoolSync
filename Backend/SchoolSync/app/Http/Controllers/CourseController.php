<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function create(Request $request){
        $request->validate([
            'category_id'=>'required',
            'name'=>'required',
            'short_description'=>'required',
            'long_description'=>'required',
        ]);

        $course = new Course();
        $course->category_id = $request->category_id;
        $course->name = $request->name;
        $course->short_description = $request->short_description;
        $course->long_description = $request->long_description;
        $course->save();
        return response()->json([
            'message'=>'Course Created Successfully'
        ]);
    }
    public function status($id){
        $course = Course::find($id);
        if($course->status == 0){
            $course->status = 1;
            $course->update();
        }else{
            $course->status = 0;
            $course->update();
        }
        return response()->json([
            'message'=>'Course Status Updated'
        ]);


    }
}
