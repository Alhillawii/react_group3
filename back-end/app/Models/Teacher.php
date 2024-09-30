<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Subject;
use App\Models\Assigment;
use App\Models\Feedback;
use App\Models\User;


class Teacher extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'id',
        'salary',
        'degree'
    ];

    public function assigment()
    {
        return $this->hasMany(Assigment::class);
    }

    public function subject()
    {
        return $this->hasMany(Subject::class);
    }



    public function user()
    {
        return $this->hasOne(User::class);
    }


    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }













}
