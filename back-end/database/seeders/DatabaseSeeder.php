<?php

namespace Database\Seeders;

use App\Models\Feedback;
use App\Models\Message;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Students (role_id = 0)
        User::factory()->count(20)->state(['role_id' => 0])->create()->each(function ($user) {
            // Create a corresponding Student record and link it to the User
            $student = Student::factory()->create([
                'id' => $user->id, // Student ID will match the User ID
            ]);

            // Update the student_id field in the User record
            $user->student_id = $student->id;
            $user->save();
        });

        // Create Teachers (role_id = 1)
        User::factory()->count(20)->state(['role_id' => 1])->create()->each(function ($user) {
            // Create a corresponding Teacher record and link it to the User
            $teacher = Teacher::factory()->create([
                'id' => $user->id, // Teacher ID will match the User ID
            ]);

            // Update the teacher_id field in the User record
            $user->teacher_id = $teacher->id;
            $user->save();
        });

        // Create Managers (role_id = 2)
        User::factory()->count(20)->state(['role_id' => 2])->create()->each(function ($user) {
            // Create a corresponding Manager record and link it to the User
            \App\Models\Manager::factory()->create([
                'id' => $user->id, // Manager ID will match the User ID
            ]);

            // Update the manager_id field in the User record (if needed)
            $user->manager_id = $user->id;
            $user->save();
        });

        // Create Supervisors (role_id = 3)
        User::factory()->count(20)->state(['role_id' => 3])->create()->each(function ($user) {
            // Create a corresponding Supervisor record and link it to the User
            \App\Models\Supervisor::factory()->create([
                'id' => $user->id, // Supervisor ID will match the User ID
            ]);

            // Update the supervisor_id field in the User record (if needed)
            $user->supervisor_id = $user->id;
            $user->save();
        });

        // Create Messages and Feedback
        Message::factory(50)->create();
        Feedback::factory(50)->create();
    }
}
