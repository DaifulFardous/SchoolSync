<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Auth;

class CourseController extends Controller
{
    public function create(Request $request){
        $request->validate([
            'name' => 'required',
            'short_description' => 'required',
            'long_description' => 'required',
        ]);
        $course = new Course();
        $course->name = $request->name;
        $course->short_description = $request->short_description;
        $course->long_description = $request->long_description;

        $course->save();

        return response()->json([
            'message' => 'Course Created Successfully'
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
    public function getAllCourses()
    {
        $courses = Course::all();

        return response()->json($courses);
    }
    public function getActiveCourses()
    {
        $courses = Course::where('status', 1)->get();

        return response()->json($courses);
    }
    public function details($id){
        $course = Course::findOrFail($id);

        return response()->json($course);
    }
    public function setInstructor(Request $request){
        $course_id = $request->course_id;
        $course = Course::where('id', $course_id)->first();
        $course->instructor_id = $request->instructor_id;
        $course->save();
        return response()->json([
                'message'=>'Instructor added successfully'
            ]);
    }
}
