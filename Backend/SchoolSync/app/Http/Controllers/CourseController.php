<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Auth;

class CourseController extends Controller
{
    public function create(Request $request){
        // Validate incoming request
        $request->validate([
            'category_id' => 'required',
            'name' => 'required',
            'short_description' => 'required',
            'long_description' => 'required',
        ]);


        // Create a new instance of the Course model
        $course = new Course();
        $course->category_id = $request->category_id;
        $course->name = $request->name;
        $course->short_description = $request->short_description;
        $course->long_description = $request->long_description;

        // Save the model to the database
        $course->save();

        // Return a JSON response indicating success
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
        // Retrieve all courses from the database
        $courses = Course::all();

        // Return courses as JSON response
        return response()->json($courses);
    }
    public function getActiveCourses()
    {
        // Retrieve active courses where status is 1
        $courses = Course::where('status', 1)->get();

        // Return active courses as JSON response
        return response()->json($courses);
    }
    public function details($id){
        // Retrieve course details from the database based on the provided course ID
        $course = Course::findOrFail($id);

        // Return course details as JSON response
        return response()->json($course);
    }
}
