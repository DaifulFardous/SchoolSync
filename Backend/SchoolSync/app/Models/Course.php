<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Instructor;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
        'instructor_id',
        'name',
        'image',
        'short_description',
        'long_description'
    ];
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function instructor()
    {
        return $this->belongsToMany(Instructor::class);
    }

}
