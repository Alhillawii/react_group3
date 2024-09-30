<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\TeacherStoreRequest;
use Exception;
use Illuminate\Support\Facades\DB;

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

    public function store(Request $request)
    {
        try {
            // Validate input data
            $validatedData = $request->validate([
                'Full_name' => 'required|string|max:255',
                'username' => 'required|string|max:255|unique:users',
                'email' => 'required|email|unique:users',
                'password' => 'required|string|min:6',
                'address' => 'nullable|string|max:255',
                'DOB' => 'nullable|date',
                'gender' => 'nullable|string|in:male,female',
                'phone' => 'nullable|string|max:20',
                'image' => 'nullable|image|mimes:jpg,jpeg,png,gif,svg|max:2048',
            ]);

            // Prepare user data
            $userData = [
                'Full_name' => $validatedData['Full_name'],
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
                'role_id' => 1,
                'address' => $validatedData['address'] ?? null,
                'DOB' => $validatedData['DOB'] ?? null,
                'gender' => $validatedData['gender'] ?? null,
                'phone' => $validatedData['phone'] ?? null,
            ];

            // Handle image upload if provided
            if ($request->hasFile('image')) {
                $imageFile = $request->file('image');
                $filename = time() . '_' . preg_replace('/\s+/', '_', pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $imageFile->getClientOriginalExtension();
                $imageFile->storeAs('public/teacher', $filename); // Store the image
                $userData['image'] = $filename;
            }

            $user = User::create($userData);

            $teacher = Teacher::create([
                'id'=>$user->id,
                'user_id' => $user->id,
                'salary' => $request->salary,
                'degree' => $request->degree,
            ]);

            $user->teacher_id = $teacher->id;
            $user->save();

            return response()->json([
                'status' => true,
                'message' => "Teacher created successfully"
            ], 201);

        } catch (\Exception $e) {
            // Catch any exceptions and return an error response
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
