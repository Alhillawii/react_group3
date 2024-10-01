<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $studentReq = auth()->user()->student->request_status;
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'user' => $user,
                'studentReq' => $studentReq,
                'token' => $token,
                'role_id' => $user->role_id,
            ]);
        }


        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function register(Request $request)
    {
        try {
            DB::beginTransaction();

            $request->validate([

                'password' => 'required|string|min:6',
            ]);
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
                $imageFile->storeAs('public/images', $filename);
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

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    }
}
