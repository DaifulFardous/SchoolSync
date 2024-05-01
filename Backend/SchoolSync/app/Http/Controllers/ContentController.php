<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function create(){
         // Validate incoming request
        $request->validate([
            'course_id' => 'required',
            'name' => 'required',
            'pdf' => 'required', // Assuming PDF file upload is required
            'short_description' => 'required',
            'long_description' => 'required',
        ]);

        // Handle PDF upload
        $pdfPath = null;
        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $pdfName = time() . '_' . $pdf->getClientOriginalName();
            $pdfPath = $pdf->storeAs('pdfs', $pdfName, 'public');
        }

        // Create a new instance of the Content model
        $content = new Content();
        $content->course_id = $request->course_id;
        $content->name = $request->name;
        $content->pdf = $pdfPath; // Assign the PDF path
        $content->short_description = $request->short_description;
        $content->long_description = $request->long_description;

        // Save the model to the database
        $content->save();

        // Return a JSON response indicating success
        return response()->json([
            'message' => 'Content Created Successfully'
        ]);
    }
    public function showCourseContents($courseId)
    {
        // Retrieve course contents for the specified course ID
        $courseContents = Content::where('course_id', $courseId)->get();

        // Return course contents as JSON response
        return response()->json($courseContents);
    }
}
