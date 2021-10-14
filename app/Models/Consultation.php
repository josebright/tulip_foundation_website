<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $table = 'consultations';
    protected $fillable = [
        'name',
        'email',
        'state',
        'country',
        'phone',
        'message',
        'option',
        'program'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
