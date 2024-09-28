<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
             return [
            'Full_name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8',
            'role_id' => 'required|integer|exists:roles,id',
            'address' => 'nullable|string|max:255',
            'DOB' => 'nullable|date',
            'gender' => 'nullable|string|in:male,female,other',
            'phone' => 'nullable|string|max:20',
            'image' => 'nullable|string|max:255',
        ];
    }

    public function message() {
          if(request()->isMethod('post')){
        return[
            'name.required'=> 'name is required',
            'email.required'=> 'email is required',
            'password.required'=> 'password is required'
        ];
       }else{
            return[
          'name.required'=> 'name is required',
            'email.required'=> 'email is required',
            'password.required'=> 'password is required'
        ];
       }
    }
}
