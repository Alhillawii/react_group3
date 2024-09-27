<?php

use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



//--------------- User ---------------------------------
Route::get('users',[UserController::class,'index']);
Route::get('users/{id}',[UserController::class,'show']);
Route::post('add_user',[UserController::class,'store']);
Route::put('userUpdate/{id}',[UserController::class,'update']);
Route::delete('userDelete/{id}',[UserController::class,'destroy']);

//------------------ Student -----------------------------------
Route::get('students',[StudentController::class,'index']);
Route::get('students/{id}',[StudentController::class,'show']);
Route::post('add_student',[StudentController::class,'store']);
Route::put('studentUpdate/{id}',[StudentController::class,'update']);
Route::delete('studentDelete/{id}',[StudentController::class,'destroy']);

//---------------- Message -----------------------------------------
Route::get('messages',[MessageController::class,'index']);
Route::get('messages/{id}',[MessageController::class,'show']);
Route::delete('messageDelete/{id}',[MessageController::class,'destroy']);

//----------------------Feedback------------------------------
Route::get('/feedbacks', [FeedbackController::class, 'index']);         // Get all feedbacks
Route::get('/feedbacksview/{id}', [FeedbackController::class, 'show']);     // Get feedback by ID
Route::post('/feedbacksstore', [FeedbackController::class, 'store']);        // Create new feedback
Route::put('/feedbacksupdate/{id}', [FeedbackController::class, 'update']);   // Update feedback by ID
Route::delete('/feedbacksdelete/{id}', [FeedbackController::class, 'destroy']); 
