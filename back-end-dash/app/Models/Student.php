<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
use App\Models\School_class;
use App\Models\Feedback;
use App\Models\Assigment_grade;


class Student extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'parent_name',
        'national_img'
    ];

    public function class() {
        return $this->belongsTo(School_class::class);
    }


    public function user() {
        return $this->hasOne(User::class);
    }

    
    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }
    
    
    public function grade()
    {
        return $this->hasMany(Assigment_grade::class);
    }
    
    

}
