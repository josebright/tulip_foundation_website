<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';
    protected $fillable = [
        'name',
        'position',
        'picture',
        'email'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
