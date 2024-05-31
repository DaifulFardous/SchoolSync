<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Content;

class MCQAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'content_id',
        'total_marks',
        'achieved_marks',
    ];

    /**
     * Get the user that owns the marks.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the content that the marks are associated with.
     */
    public function content()
    {
        return $this->belongsTo(Content::class);
    }
}