<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Feedback extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = [
        'title',
        'description',
    ];
     

    
    public function student() {
        return $this->belongsTo(Student::class);
    }

    public function teacher() {
        return $this->belongsTo(Teacher::class);
    }

    public function supervisor() {
        return $this->belongsTo(Supervisor::class);
    }

    public function manager() {
        return $this->belongsTo(Manager::class);
    }




}
