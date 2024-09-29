<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\TeacherStoreRequest;
use Exception;

class TeacherController extends Controller
{
    // zaina
//    public function index()
//    {
//        $teachers = Teacher::with('user')
//            ->whereHas('user', function ($query) {
//                $query->where('role_id', 1);
//            })
//            ->get();
//
//        return response()->json([
//            'results' => $teachers
//        ], 200);
//    }

// abood
    public function index()
    {
        $teachers = User::with('teacher')
            ->where('role_id', 1)
            ->get();

        return response()->json([
            'results' => $teachers
        ], 200);
    }


    public function store(TeacherStoreRequest $request)
    {
        try {
            $user = User::create([
                'Full_name' => $request->Full_name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role_id' => 1,
                'address' => $request->address,
                'DOB' => $request->dob,
                'gender' => $request->gender,
                'phone' => $request->phone,
                'image' => $request->image,
            ]);

            $teacher = Teacher::create([
                'user_id' => $user->id,
                'salary' => $request->salary,
                'degree' => $request->degree,
            ]);
            $user->teacher_id = $teacher->id;
            $user->save();

            return response()->json([
                'message' => 'Teacher created successfully',
                'teacher' => $teacher->load('user')
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        $teacher = Teacher::with('user')->find($id);
        if (!$teacher) {
            return response()->json([
                'message' => 'Teacher Not Found'
            ], 404);
        }
        return response()->json([
            'results' => $teacher
        ], 200);
    }

    public function update(TeacherStoreRequest $request, $id)
    {
        try {
            $teacher = Teacher::find($id);
            if (!$teacher) {
                return response()->json([
                    'message' => 'Teacher Not Found'
                ], 404);
            }

            $teacher->user->update([
                'Full_name' => $request->Full_name,
                'username' => $request->username,
                'email' => $request->email,
                'address' => $request->address,
                'DOB' => $request->dob,
                'gender' => $request->gender,
                'phone' => $request->phone,
                'image' => $request->image,
            ]);

            if ($request->has('password')) {
                $teacher->user->update(['password' => bcrypt($request->password)]);
            }

            $teacher->update([
                'salary' => $request->salary,
                'degree' => $request->degree,
            ]);

            return response()->json([
                'message' => 'Teacher updated successfully',
                'teacher' => $teacher->load('user')
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        $teacher = Teacher::find($id);
        if (!$teacher) {
            return response()->json([
                'message' => 'Teacher Not Found'
            ], 404);
        }
        $teacher->user->delete();
        return response()->json([
            'message' => 'Teacher deleted successfully'
        ], 200);
    }
}
