<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Instructor;
use Illuminate\Http\Request;
use Auth;

class CourseController extends Controller
{
    public function create(Request $request){
        $request->validate([
            'name' => 'required',
            'instructor_name' => 'required',
            'short_description' => 'required',
            'long_description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imageName = time().'.'.$request->image->extension();
        $request->image->storeAs('courses', $imageName, 'public');

        $course = new Course();
        $course->name = $request->name;
        $course->instructor_name = $request->instructor_name;
        $course->short_description = $request->short_description;
        $course->long_description = $request->long_description;
        $course->image = asset('storage/courses/' . $imageName);;
        $course->save();

        return response()->json([
            'message' => 'Course Created Successfully',
            'image_url' => $course->image_url,
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
    public function getInstructor($id){
        $instructor = Instructor::find($id);
        return response()->json([
            'data' => $instructor
        ]);
    }

    public function getCoursesByInstructorName(Request $request)
    {
        $request->validate([
            'instructor_name' => 'required|string'
        ]);

        $instructorName = $request->input('instructor_name');
        $courses = Course::where('instructor_name', $instructorName)
            ->select('id','name', 'image', 'short_description', 'long_description')
            ->get();

        return response()->json($courses);
    }
}