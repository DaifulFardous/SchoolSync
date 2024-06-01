<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\MCQAnswer;
use Illuminate\Support\Facades\Auth;

class ContentController extends Controller
{
    public function create(Request $request){
        $request->validate([
            'course_id' => 'required',
            'name' => 'required',
            'pdf' => 'required',
            'short_description' => 'required',
            'long_description' => 'required',
        ]);
        $pdfPath = null;
        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $pdfName = time() . '_' . $pdf->getClientOriginalName();
            $pdfPath = $pdf->storeAs('pdfs', $pdfName, 'public');
        }
        $content = new Content();
        $content->course_id = $request->course_id;
        $content->name = $request->name;
        $content->pdf =  asset('storage/pdfs/' . $pdfName);
        $content->short_description = $request->short_description;
        $content->long_description = $request->long_description;
        $content->save();
        return response()->json([
            'message' => 'Content Created Successfully'
        ]);
    }
    public function showCourseContents($courseId)
    {
        $courseContents = Content::where('course_id', $courseId)->get();

        return response()->json($courseContents);
    }
    public function examAttemptOrNot($contentId){
        $mcq = MCQAnswer::where('user_id',Auth::user()->id)
        ->where('content_id', $contentId)
        ->first();

        if ($mcq) {
        $response = ['status' => 'yes'];
        } else {
        $response = ['status' => 'no'];
        }
        return response()->json($response);
    }
}