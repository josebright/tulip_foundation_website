<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CATEGORY extends Model
{
    protected $table = 'categories';
    protected $fillable = [
        'title',
        'description'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
