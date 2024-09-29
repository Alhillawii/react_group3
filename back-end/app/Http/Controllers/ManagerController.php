<?php

namespace App\Http\Controllers;

use App\Models\Manager;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\ManagerStoreRequest;
use Exception;

class ManagerController extends Controller
{
    //zaina
//    public function index()
//    {
//        $managers = Manager::with('user')
//            ->whereHas('user', function ($query) {
//                $query->where('role_id', 3);
//            })
//            ->get();
//
//        return response()->json([
//            'results' => $managers
//        ], 200);
//    }

// abood
    public function index()  {
        $managers = User::where('role_id', 3)->get();
        return response()->json([
            'results' => $managers
        ], 200);
    }

    public function store(ManagerStoreRequest $request)
    {
        try {


            if (User::where('email', $request->email)->exists()) {
                return response()->json([
                    'message' => 'Email already exists.',
                ], 400); // Bad Request
            }
            $user = User::create([
                'Full_name' => $request->Full_name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role_id' => 3,
                'address' => $request->address,
                'DOB' => $request->dob,
                'gender' => $request->gender,
                'phone' => $request->phone,
                'image' => $request->image,
            ]);

            $manager = Manager::create([
                'id' => $user->id,

            ]);

            $user->manager_id = $manager->id;
            $user->save();

            return response()->json([
                'message' => 'Manager created successfully',
                'manager' => $manager->load('user')
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
        $manager = Manager::with('user')->find($id);
        if (!$manager) {
            return response()->json([
                'message' => 'Manager Not Found'
            ], 404);
        }
        return response()->json([
            'results' => $manager
        ], 200);
    }

    public function update(ManagerStoreRequest $request, $id)
    {
        try {
            $manager = Manager::find($id);
            if (!$manager) {
                return response()->json([
                    'message' => 'Manager Not Found'
                ], 404);
            }

            $manager->user->update([
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
                $manager->user->update(['password' => bcrypt($request->password)]);
            }

            return response()->json([
                'message' => 'Manager updated successfully',
                'manager' => $manager->load('user')
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
        $manager = Manager::find($id);
        if (!$manager) {
            return response()->json([
                'message' => 'Manager Not Found'
            ], 404);
        }
        $manager->user->delete();
        return response()->json([
            'message' => 'Manager deleted successfully'
        ], 200);
    }
}
