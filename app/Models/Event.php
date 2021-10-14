<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $fillable = [
        'title',
        'article',
        'picture',
        'created_at'
    ];
    protected $hidden =[
        'updated_at'
    ];
}
