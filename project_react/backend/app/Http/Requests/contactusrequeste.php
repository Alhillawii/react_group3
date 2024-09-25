<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class contactusrequeste extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            # code...

            return [
                'name' => 'string|required|max:225',
                'title' => 'string|required|max:225',
                'message' => 'string|required|max:1000',  // Allows up to 1000 characters
            ];
        } else {
            # code...

            return [
                'name' => 'string|required|max:225',
                'title' => 'string|required|max:225',
                'message' => 'string|required|max:1000',  // Allows up to 1000 characters
            ];
        }

    }
}
