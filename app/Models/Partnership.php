<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partnership extends Model
{
    protected $table = 'partnerships';
    protected $fillable = [
        'title',
        'article',
        'brandLink',
        'picture'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
