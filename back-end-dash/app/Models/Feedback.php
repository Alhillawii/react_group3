<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Supervisor;
use App\Models\Manager;

class Feedback extends Model
{
    use HasFactory, SoftDeletes; // Using traits for factory and soft deletes

    protected $fillable = [
        'title',
        'description',
    ];

    // Define the relationship with Student
    public function student() {
        return $this->belongsTo(Student::class);
    }

    // Define the relationship with Teacher
    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }

    // Define the relationship with Supervisor
    public function supervisor() {
        return $this->belongsTo(Supervisor::class);
    }

    // Define the relationship with Manager
    public function manager() {
        return $this->belongsTo(Manager::class);
    }
}
