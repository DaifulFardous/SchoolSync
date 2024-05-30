<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;

class AssignmentController extends Controller
{
    public function create(Request $request) {

        $request->validate([
            'course_id' => 'required|integer',
            'title' => 'required|string',
            'question_file' => 'required|file|mimes:pdf,doc,docx|max:2048',
            'question' => 'required|text',
        ]);

        $assignmentFilePath = null;
        if ($request->hasFile('question_file')) {
            $assignmentFile = $request->file('question_file');
            $assignmentFileName = time() . '_' . $assignmentFile->getClientOriginalName();
            $assignmentFilePath = $assignmentFile->storeAs('assignments', $assignmentFileName, 'public');
        }

        $assignment = new Assignment();
        $assignment->course_id = $request->course_id;
        $assignment->title = $request->title;
        $assignment->question_file = $assignmentFilePath;
        $assignment->question = $request->question;

        $assignment->save();

        return response()->json([
            'message' => 'Assignment Uploaded Successfully'
        ]);
    }
}