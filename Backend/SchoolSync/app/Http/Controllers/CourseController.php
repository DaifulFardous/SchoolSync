<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Instructor;
use Illuminate\Http\Request;
use App\Models\Enrollment;
use App\Models\MCQAnswer;
use Illuminate\Support\Facades\Auth;

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

    public function enrolledOrNot($courseId)
    {
        $enrollment = Enrollment::where('user_id',Auth::user()->id)
                                 ->where('course_id', $courseId)
                                 ->first();

        if ($enrollment) {
            $response = ['status' => 'yes'];
        } else {
            $response = ['status' => 'no'];
        }
        return response()->json($response);
    }
    public function totalUsers($courseId)
    {
        $userCount = Enrollment::where('course_id', $courseId)->count();
        $response = ['total_users' => $userCount];
        return response()->json($response);
    }
    public function userTotalMarks($courseId){
        $marks = MCQAnswer::where('user_id', Auth::user()->id)
        ->whereHas('content', function($query) use ($courseId) {
            $query->where('course_id', $courseId);
        })
        ->with(['content' => function($query) {
            $query->select('id', 'name', 'course_id');
        }])
        ->get(['id', 'content_id', 'total_marks', 'achieved_marks']);
       $processedMarks = $marks->map(function($mark) {
           return [
               'content_title' => $mark->content->name,
               'total_marks' => $mark->total_marks,
               'achieved_marks' => $mark->achieved_marks,
               'percentage' => ($mark->achieved_marks / $mark->total_marks) * 100,
           ];
       });
       return response()->json($processedMarks);
    }
    public function userMarks($contentId){
        $marks = MCQAnswer::where('user_id', Auth::user()->id)
        ->where('content_id', $contentId)
        ->first();

        if (!$marks) {
            return response()->json(['error' => 'Marks not found for the specified user and content'], 404);
        }

        return response()->json($marks);
    }
}