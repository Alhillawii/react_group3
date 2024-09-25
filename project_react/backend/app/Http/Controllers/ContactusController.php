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

        if (isEmpty($messages)) {
            # code...
            return response()->json(['message' => 'sorry no messages'],401);

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
            contactus::create(
                [
                    'name' => $request->name,
                    'title' => $request->title,
                    'description' => $request->description,
                ]
            );

            return response()->json(['message' => 'thank you your message has been reseve'],200);
        } catch (Exception $e) {
            return response()->json(['message' => 'something went rong : ' . $e->getMessage()]);
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
    public function destroy(contactus $contactus)
    {
        //
    }
}
