<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Exception;

class StudentController extends Controller
{
    public function index()  {
        $students = Student::all();
        return response()->json([
            'results'=>$students
        ],200);
    }
    public function store(UserStoreRequest $request) {
        try{
            Student::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>$request->password,
            ]);
            return response()->json([
                'message'=>'student created successfully'
            ],200);

        }catch(Exception $e){
            return response()->json([
                'message'=>'something wrong'
            ],500);
        }
    }
    public function show($id)  {
        $student =Student::find($id);
        if(!$student){
            return response()->json([
                'message'=>'User Not Found'
            ],404);
        }
        return response()->json([
            'results'=>$student
        ],200);
    }

    public function update(UserStoreRequest $request,$id)  {
        try{
            $student = Student::find($id);
            if(!$student){
                return response()->json([
                    'message'=>'User Not Found'
                ],404);}
            $student->name=$request->name;
            $student->email=$request->email;
            $student->password=$request->password;
            $student->save();
            return response()->json([
                'message'=>'updated successfully'
            ],200);

        }catch(Exception $e){
            return response()->json([
                'message'=>'something wrong'
            ],500);
        }
    }



    public function destroy($id){
        $student =Student::find($id);
        if(!$student){
            return response()->json([
                'message'=>'Student Not Found'
            ],404);}
        $student->delete();
        return response()->json([
            'message'=>'deleted successfully'
        ],200);
    }
}
