<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assigment_grade extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'mark',
        'submission'
    ];

    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }

    public function student() {
        return $this->belongsTo(Student::class);
    }
}
