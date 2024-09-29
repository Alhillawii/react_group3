<?php

namespace App\Http\Controllers;

use App\Models\Assigment;
use Illuminate\Http\Request;

class AssigmentController extends Controller
{
    // Get all assigments
    public function index()
    {
        $assigments = Assigment::all();
        return response()->json($assigments);
    }

    // Store a new assigment
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'attachment' => 'required|string',
            'teacher_id' => 'required|integer',
        ]);

        $assigment = Assigment::create($validated);

        return response()->json($assigment, 201);
    }

    // Show a specific assigment
    public function show($id)
    {
        $assigment = Assigment::find($id);

        if (!$assigment) {
            return response()->json(['message' => 'Assigment not found'], 404);
        }

        return response()->json($assigment);
    }

    // Update an existing assigment
    public function update(Request $request, $id)
    {
        $assigment = Assigment::find($id);

        if (!$assigment) {
            return response()->json(['message' => 'Assigment not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'attachment' => 'required|string',
            'teacher_id' => 'required|integer',
        ]);

        $assigment->update($validated);

        return response()->json($assigment);
    }

    // Delete an assigment
    public function destroy($id)
    {
        $assigment = Assigment::find($id);

        if (!$assigment) {
            return response()->json(['message' => 'Assigment not found'], 404);
        }

        $assigment->delete();

        return response()->json(['message' => 'Assigment deleted']);
    }
}
