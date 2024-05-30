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
        'name',
        'short_description',
        'long_description',
        'image'
    ];
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function instructor()
    {
        return $this->belongsToMany(Instructor::class);
    }
    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }

}