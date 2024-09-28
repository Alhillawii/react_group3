<?php


use App\Http\Controllers\ManagerController;

use App\Http\Controllers\SchoolClassController;
use App\Http\Controllers\FeedbackController;

use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\TeacherController;
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



//---------------- Teacher -----------------------------------------
    Route::get('teachers', [TeacherController::class, 'index']);      
    Route::get('/teachers/{id}', [TeacherController::class, 'show']); 
    Route::post('/add_teachers', [TeacherController::class, 'store']);     
    Route::put('/teachersUpdate/{id}', [TeacherController::class, 'update']); 
    Route::delete('/teachersDelete/{id}', [TeacherController::class, 'destroy']);

//---------------- Managers -----------------------------------------
    Route::get('managers', [ManagerController::class, 'index']);      
    Route::get('/managers/{id}', [ManagerController::class, 'show']); 
    Route::post('/add_managers', [ManagerController::class, 'store']);     
    Route::put('/managersUpdate/{id}', [ManagerController::class, 'update']); 
    Route::delete('/managersDelete/{id}', [ManagerController::class, 'destroy']);

//----------------------Feedback------------------------------
Route::get('/feedbacks', [FeedbackController::class, 'index']);       
Route::get('/feedbacksview/{id}', [FeedbackController::class, 'show']);    
Route::post('/feedbacksstore', [FeedbackController::class, 'store']);       
Route::put('/feedbacksupdate/{id}', [FeedbackController::class, 'update']);   
Route::delete('/feedbacksdelete/{id}', [FeedbackController::class, 'destroy']); 
//----------------------SchoolClass------------------------------
Route::get('/class', [SchoolClassController::class, 'index']);        
Route::get('/classview/{id}', [SchoolClassController::class, 'show']);     
Route::post('/classstore', [SchoolClassController::class, 'store']);       
Route::put('/classupdate/{id}', [SchoolClassController::class, 'update']);   
Route::delete('/classdelete/{id}', [SchoolClassController::class, 'destroy']); 

