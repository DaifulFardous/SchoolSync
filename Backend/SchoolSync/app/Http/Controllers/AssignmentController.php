<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;
use App\Models\Answer;
use App\Models\MCQAnswer;
use Illuminate\Support\Facades\Auth;

class AssignmentController extends Controller
{
    public function create(Request $request) {
        $request->validate([
            'course_id' => 'required|integer',
            'assignment_name' => 'required|string',
            'assignment_subject' => 'required|string',
            'num_of_ques' => 'required|integer',
            'points' => 'required|integer',
            'assignment_file' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $assignment = new Assignment();
        $assignment->course_id = $request->course_id;
        $assignment->name = $request->assignment_name;
        $assignment->subject = $request->assignment_subject;
        $assignment->num_of_ques = $request->num_of_ques; // Make sure to include this field
        $assignment->points = $request->points;

        if ($request->hasFile('assignment_file')) {
            $assignmentFileName = time().'.'.$request->assignment_file->extension();
            $request->assignment_file->storeAs('assignments', $assignmentFileName, 'public');
            $assignment->file_path = asset('storage/assignments/' . $assignmentFileName);
        }

        $assignment->save();

        return response()->json([
            'message' => 'Assignment Uploaded Successfully',
            'file_url' => $assignment->file_path ?? null,
        ]);
    }

    public function showCourseAssignments($id){
        $assignments = Assignment::where('course_id', $id)->get();
        return response()->json($assignments);
    }

    public function uploadAssignmentAnswer(Request $request) {
        $request->validate([
            'user_id' => 'required|integer',
            'assignment_id' => 'required|integer',
            'answer_file' => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);
        $answerFileName = time() . '.' . $request->answer_file->extension();
        $request->answer_file->storeAs('assignment_answers', $answerFileName, 'public');
        $assignmentAnswer = new Answer();
        $assignmentAnswer->user_id = $request->user_id;
        $assignmentAnswer->assignment_id = $request->assignment_id;
        $assignmentAnswer->file_path = asset('storage/assignment_answers/' . $answerFileName);
        $assignmentAnswer->save();

        return response()->json([
            'message' => 'Assignment Answer Uploaded Successfully',
            'file_url' => $assignmentAnswer->file_path,
        ]);
    }

    public function showAssignmentAnswer($id){
        $answers = Answer::where('assignment_id', $id)->get();
        return response()->json($answers);
    }

    public function mcqAnswer(Request $request){
        $mcq = new MCQAnswer();
        $mcq->user_id = Auth::user()->id;
        $mcq->content_id = $request->content_id;
        $mcq->total_marks = $request->total_marks;
        $mcq->achieved_marks = $request->achieved_marks;
        $mcq->save();
        return response()->json([
            'message' => 'MCQ Answer Uploaded Successfully',
        ]);
    }
    public function showMarks($userId, $courseId){
         $marks = MCQAnswer::where('user_id', $userId)
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
    public function getUserContentMarks($userId, $contentId)
    {
        $marks = MCQAnswer::where('user_id', $userId)
            ->where('content_id', $contentId)
            ->first();

        if (!$marks) {
            return response()->json(['error' => 'Marks not found for the specified user and content'], 404);
        }

        return response()->json($marks);
    }

}