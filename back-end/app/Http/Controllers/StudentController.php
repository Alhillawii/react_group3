<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class StudentController extends Controller
{
    public function index()  {
        $students = User::where('role_id', 0)->get();
        return response()->json([
            'results'=>$students
        ],200);
    }
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();


            // Create a new User first
            $userData = [
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role_id' => 0,
                'Full_name' => $request->Full_name,
                'address' => $request->address,
                'DOB' => $request->DOB,
                'phone' => $request->phone,
                'gender' => $request->gender,
                'request_status' => 'approved',

            ];


            if ($request->hasFile('image')) {

                $imageFile = $request->file('image');
                $filename = time() . '_' . preg_replace('/\s+/', '_', pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $imageFile->getClientOriginalExtension();
                $imageFile->storeAs('public/images', $filename); // Store the image
                $userData['image'] = $filename;
            }
            $user = User::create($userData);

            $studentData = [
                'id' => $user->id,
                'parent_name' => $request->parent_name,

                'school_class_id' => $request->school_class_id,
            ];

            if ($request->hasFile('national_img')) {

                $imageFile = $request->file('national_img');
                $filename = time() . '_' . preg_replace('/\s+/', '_', pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $imageFile->getClientOriginalExtension();
                $imageFile->storeAs('public/images', $filename); // Store the image
                $studentData['national_img'] = $filename;
            }

            $student = Student::create($studentData);



            $user->student_id = $student->id;
            $user->save();


            DB::commit();

            return response()->json([
                'message' => 'Student created successfully',
                'user' => $user,
                'student' => $student
            ], 201);

        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage(),

            ], 500);
        }
    }

    public function show($id)  {
        $student = User::with('student')
            ->where('id', $id)
            ->where('role_id', 0)
            ->first();

        if (!$student) {
            return response()->json([
                'message' => 'Student Not Found'
            ], 404);
        }
        $studentData = $student->toArray();
        $studentData = array_merge($studentData, $student->student ? $student->student->toArray() : []);

        return response()->json([
            'results' => $studentData
        ], 200);
    }

    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();

            $student = Student::findOrFail($id);
            $user = User::findOrFail($student->id);

            if (!$student || !$user) {
                return response()->json([
                    'message' => 'Student Not Found'
                ], 404);
            }

            // Update User information
            $user->update([
                'username' => $request->username,
                'email' => $request->email,
                'Full_name' => $request->Full_name,
                'address' => $request->address,
                'DOB' => $request->DOB,
                'phone' => $request->phone,
                'gender' => $request->gender,
            ]);

            // Update password only if provided
            if ($request->has('password')) {
                $user->password = bcrypt($request->password);
                $user->save();
            }

            // Update Student information
            $student->update([
                'parent_name' => $request->parent_name,
                'school_class_id' => $request->school_class_id,
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Student updated successfully'
            ], 200);

        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }



    public function destroy($id){
        $user = User::where('id', $id)->where('role_id', 0)->first();
        if(!$user){
            return response()->json([
                'message'=>'Student Not Found'
            ],404);}

        DB::beginTransaction();
        try {
            Student::where('id', $id)->delete();
            $user->delete();
            DB::commit();

            return response()->json([
                'message' => 'Student deleted successfully'
            ], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}
