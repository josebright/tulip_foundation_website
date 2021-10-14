<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volunteer extends Model
{
    protected $table = 'volunteers';
    protected $fillable = [
        'name',
        'email',
        'phone',
        'state',
        'country',
        'experience',
        'skills',
        'travel_availability',
        'created_at'
    ];
    protected $hidden =[
        'updated_at'
    ];
}
