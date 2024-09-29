<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Models\Supervisor;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;

class SupervisorController extends Controller
{
    public function index()  {
        $supervisors = User::where('role_id', 2)->get();
        return response()->json([
            'results' => $supervisors
        ], 200);
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $userData = [
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role_id' => 2,
                'Full_name' => $request->Full_name,
                'address' => $request->address,
                'DOB' => $request->DOB,
                'phone' => $request->phone,
                'gender' => $request->gender,
            ];

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                $userData['image'] = 'images/' . $imageName;
            }
            $user = User::create($userData);

            Supervisor::create([
                'id' => $user->id
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Supervisor created successfully'
            ], 200);

        } catch(Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage(),

            ], 500);
        }
    }

    public function show($id)
    {
        $supervisor = User::where('id', $id)->where('role_id', 2)->first();
        if (!$supervisor) {
            return response()->json([
                'message' => 'Supervisor Not Found'
            ], 404);
        }
        return response()->json([
            'results' => $supervisor
        ], 200);
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::where('id', $id)->where('role_id', 2)->first();
            if (!$user) {
                return response()->json([
                    'message' => 'Supervisor Not Found'
                ], 404);
            }

            $user->username = $request->username;
            $user->email = $request->email;
            $user->Full_name = $request->Full_name;
            $user->address = $request->address;
            $user->DOB = $request->DOB;
            $user->phone = $request->phone;
            $user->gender = $request->gender;

            if ($request->filled('password')) {
                $user->password = bcrypt($request->password);
            }

            $user->save();

            return response()->json([
                'message' => 'Supervisor updated successfully'
            ], 200);

        } catch(Exception $e) {
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        $user = User::where('id', $id)->where('role_id', 2)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Supervisor Not Found'
            ], 404);
        }

        DB::beginTransaction();
        try {
            Supervisor::where('id', $id)->delete();
            $user->delete();
            DB::commit();

            return response()->json([
                'message' => 'Supervisor deleted successfully'
            ], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }
}

