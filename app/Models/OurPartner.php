<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OurPartner extends Model
{
    protected $table = 'ourPartners';
    protected $fillable = [
        'picture',
        'url'
    ];
    protected $hidden =[
        'created_at',
        'updated_at'
    ];
}
