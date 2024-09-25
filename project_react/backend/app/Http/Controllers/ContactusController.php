<?php

namespace App\Http\Controllers;

use App\Http\Requests\contactusrequeste;
use App\Models\contactus;
use Exception;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class ContactusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = contactus::all();

        if (!$messages) {
            # code...
            return response()->json(['message' => 'sorry no messages']);

        } else {
            # code...
            return response()->json(['messages'=> $messages, 'message' => 'here is the messages'],200);
        }


    }

    // i removes the create function becuse we are going to make it using react

    /**
     * Store a newly created resource in storage.
     */
    public function store(contactusrequeste $request)
    {
        try {
            ContactUs::create([
                'name'    => $request->name,
                'title'   => $request->title,
                'message' => $request->message
            ]);

            return response()->json(['message' => 'Thank you, your message has been received.'], 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'Something went wrong: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(contactus $contactus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(contactus $contactus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, contactus $contactus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $message = contactus::findOrFail($id);
        if ($message) {
            # code...
            try {
                $message->delete();
                return response()->json(['message' => 'the message has been deleted']);
            } catch (Exception $e) {
                return response()->json(['message' => 'some thing went rong : ' .$e->getMessage()],500);
            }
        } else {
            return response()->json(['message' => 'message not found'],404);
        }

    }
}
