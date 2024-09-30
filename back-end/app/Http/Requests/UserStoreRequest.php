<?php
//
//namespace App\Http\Requests;
//
//use Illuminate\Foundation\Http\FormRequest;
//use Illuminate\Validation\Rule;
//
//class UserStoreRequest extends FormRequest
//{
//    /**
//     * Determine if the user is authorized to make this request.
//     */
//    public function authorize(): bool
//    {
//        return true;
//    }
//
//    /**
//     * Get the validation rules that apply to the request.
//     *
//     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
//     */
//    public function rules(): array
//    {
//        $rules = [
//            'username' => 'required|string|unique:users,username',
//            'email' => 'required|email|unique:users,email',
//            'password' => 'required|string|min:6',
//            'role_id' => 'required|integer',
//            'full_name' => 'required|string',
//            'address' => 'required|string',
//            'DOB' => 'required|date',
//            'phone' => 'required|string',
//            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
//            'student_ID' => 'nullable|exists:students,id',
//            'teacher_ID' => 'nullable|exists:teachers,id',
//            'supervisor_ID' => 'nullable|exists:supervisors,id',
//            'manager_ID' => 'nullable|exists:managers,id',
//        ];
//
//        if ($this->isMethod('put') || $this->isMethod('patch')) {
//            $userId = $this->route('user'); // Assuming you're using route model binding
//            $rules['username'] = ['sometimes', 'required', 'string', Rule::unique('users')->ignore($userId)];
//            $rules['email'] = ['sometimes', 'required', 'email', Rule::unique('users')->ignore($userId)];
//            $rules['password'] = 'sometimes|nullable|string|min:6';
//        }
//
//        return $rules;
//    }
//
//    /**
//     * Get the error messages for the defined validation rules.
//     *
//     * @return array<string, string>
//     */
//    public function messages(): array
//    {
//        return [
//            'username.required' => 'Username is required',
//            'username.unique' => 'This username is already taken',
//            'email.required' => 'Email is required',
//            'email.email' => 'Please enter a valid email address',
//            'email.unique' => 'This email is already registered',
//            'password.required' => 'Password is required',
//            'password.min' => 'Password must be at least 6 characters long',
//            'role_id.required' => 'Role ID is required',
//            'role_id.integer' => 'Role ID must be an integer',
//            'full_name.required' => 'Full name is required',
//            'address.required' => 'Address is required',
//            'DOB.required' => 'Date of Birth is required',
//            'DOB.date' => 'Please enter a valid date for Date of Birth',
//            'phone.required' => 'Phone number is required',
//            'gender.required' => 'Gender is required',
//            'gender.in' => 'Please select a valid gender option',
//            'student_ID.exists' => 'The selected student ID is invalid',
//            'teacher_ID.exists' => 'The selected teacher ID is invalid',
//            'supervisor_ID.exists' => 'The selected supervisor ID is invalid',
//            'manager_ID.exists' => 'The selected manager ID is invalid',
//        ];
//    }
//}


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

    public function message()
    {
        if (request()->isMethod('post')) {
            return [
                'name.required' => 'name is required',
                'email.required' => 'email is required',
                'password.required' => 'password is required'
            ];
        } else {
            return [
                'name.required' => 'name is required',
                'email.required' => 'email is required',
                'password.required' => 'password is required'
            ];
        }
    }
}
