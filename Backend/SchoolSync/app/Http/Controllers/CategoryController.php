<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create(Request $request){
        $request->validate([
            'name'=>'required',
            'short_description'=>'required',
            'long_description'=>'required'
        ]);
        $category = new Category();

        $category->name = $request->name;
        $category->short_description = $request->short_description;
        $category->long_description = $request->long_description;

        $category->save();
        return response()->json([
            'message'=>'Category Saved Successfully'
        ]);
    }
}