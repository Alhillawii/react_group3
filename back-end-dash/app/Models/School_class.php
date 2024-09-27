<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Student;
use App\Models\Subject;

class School_class extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'class_name',
    ];

    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }

    public function student()
    {
        return $this->hasMany(Student::class);
    }
}
