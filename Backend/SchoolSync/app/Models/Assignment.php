<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;

class Assignment extends Model
{
    use HasFactory;

    // Specify the table if it's not the plural of the model name
    protected $table = 'assignments';

    // The attributes that are mass assignable
    protected $fillable = [
        'course_id',
        'name',
        'subject',
        'num_of_ques',
        'points',
        'file_path',
    ];

    // Relationships
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
