<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Youtube extends Model
{
    protected $table = 'youtubes';
    protected $fillable = [
        'title',
        'url'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
