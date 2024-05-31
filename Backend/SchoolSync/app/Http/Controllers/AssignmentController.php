<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;
use App\Models\Answer;

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
}
