<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class Manager extends Model
{
    use HasFactory , SoftDeletes;
    protected $fillable = [
        'id'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }

}
