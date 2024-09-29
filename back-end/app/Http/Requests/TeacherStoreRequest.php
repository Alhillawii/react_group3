<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Set to true if you want to handle authorization elsewhere
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'Full_name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'nullable|string|min:8',
            'address' => 'nullable|string|max:255',
            'DOB' => 'nullable|date',
            'gender' => 'nullable|string|in:male,female,other',
            'phone' => 'nullable|string|max:20',
            'image' => 'nullable|string|max:255',
            'salary' => 'required|numeric|min:0',
            'degree' => 'required|string|max:255',
        ];
    }
}
