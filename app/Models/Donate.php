<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donate extends Model
{
    protected $table = 'donates';
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'country',
        'address',
        'city',
        'state',
        'zip',
        'amount',
        'anonymous',
        'status'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
