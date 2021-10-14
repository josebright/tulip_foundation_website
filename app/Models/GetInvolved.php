<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GetInvolved extends Model
{
    protected $table = 'getInvolved';
    protected $fillable = [
        'title',
        'article',
        'programDate',
        'picture'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
