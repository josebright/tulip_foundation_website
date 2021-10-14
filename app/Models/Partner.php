<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $table = 'partners';
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'company',
        'phone',
        'about_us',
        'ur_interest'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
