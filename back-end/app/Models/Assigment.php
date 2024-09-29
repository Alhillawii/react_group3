<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Teacher;

class Assigment extends Model
{
    use HasFactory , SoftDeletes;

    protected $guarded = [];

    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }


    public function assigment_grade()
    {
        return $this->hasMany(Assigment_grade::class);
    }

}
