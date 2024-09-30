<?php

use App\Http\Controllers\AssigmentController;
use App\Http\Controllers\SubjectController;
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

//---------------- Supjects -----------------------------------------

Route::get('/subjects', [SubjectController::class, 'index']);

Route::post('/subjects', [SubjectController::class, 'store']);

Route::get('/subjects/{id}', [SubjectController::class, 'show']);

Route::put('/subjects/{id}', [SubjectController::class, 'update']);

Route::delete('/subjects/{id}', [SubjectController::class, 'destroy']);

//---------------- Supjects -----------------------------------------

Route::get('/assigments', [AssigmentController::class, 'index']);
Route::post('/assigments', [AssigmentController::class, 'store']);
Route::get('/assigments/{id}', [AssigmentController::class, 'show']);
Route::put('/assigments/{id}', [AssigmentController::class, 'update']);
Route::delete('/assigments/{id}', [AssigmentController::class, 'destroy']);
