<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audience extends Model
{
    protected $table = 'audiences';
    protected $fillable = [
        'resident',
        'service',
        'country'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
