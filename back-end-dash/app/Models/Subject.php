<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Teacher;
use App\Models\School_class ;

class Subject extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'subject_name',
        'semster'
    ];

    public function class() {
        return $this->belongsTo(School_class::class);
    }

    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }


}
