<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $table = 'galleries';
    protected $fillable = [
        'title',
        'picture'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
