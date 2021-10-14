<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blogs';
    protected $fillable = [
        'author',
        'title',
        'article',
        'picture',
        'created_at'
    ];
    protected $hidden =[
        'updated_at'
    ];
}
