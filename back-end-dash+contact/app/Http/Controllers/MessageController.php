<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::all();
        return response()->json([
            'results' => $messages
        ], 200);
    }

    public function show($id)
    {
        $messages = Message::find($id);
        if (!$messages) {
            return response()->json([
                'message' => 'Message Not Found'
            ], 404);
        }
        return response()->json([
            'results' => $messages
        ], 200);
    }

    public function destroy($id)
    {
        $messages = Message::find($id);
        if (!$messages) {
            return response()->json([
                'message' => 'Message Not Found'
            ], 404);
        }
        $messages->delete();
        return response()->json([
            'message' => 'deleted successfully'
        ], 200);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'content' => 'required|string',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

        // Create a new message
        $message = Message::create([
            'title' => $validatedData['title'],
            'subject' => $validatedData['subject'],
            'content' => $validatedData['content'],
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
        ]);

        return response()->json([
            'message' => 'Message created successfully',
            'data' => $message
        ], 201);
    }
}
