<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Manager;
use App\Models\Supervisor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'full_name' => $this->faker->name(),  // Generates a random full name
            'username' => $this->faker->unique()->userName(),  // Generates a unique username
            'email' => $this->faker->unique()->safeEmail(),  // Generates a unique email address
            'email_verified_at' => now(),  // Sets the current timestamp for email verification
            'password' => bcrypt('password'),  // Default password for testing
            'role_id' => $this->faker->numberBetween(0, 3), // 0 = Student, 1 = Teacher, 2 = Manager, 3 = Supervisor
            'address' => $this->faker->address(),  // Generates a random address
            'DOB' => $this->faker->date(),  // Generates a random date of birth
            'gender' => $this->faker->randomElement(['male', 'female']),  // Randomly assigns gender
            'phone' => $this->faker->phoneNumber(),  // Generates a random phone number
        ];
    }

    /**
     * After creating the User, create related entities based on role_id.
     *
     * @param \App\Models\User $user
     * @return void
     */
    public function afterCreating($user)
    {
        // Use faker for generating additional data
        $faker = \Faker\Factory::create();

        // If the user is a student (role_id = 0)
        if ($user->role_id == 0) {
            Student::create([
                'id' => $user->id, // The student ID will be the same as the user ID
                'national_number' => $faker->randomNumber(8),
                'image' => $faker->imageUrl(),
                'parent_name' => $faker->name,
                'class_id' => $faker->randomNumber(),
            ]);
        }

        // If the user is a teacher (role_id = 1)
        if ($user->role_id == 1) {
            Teacher::create([
                'id' => $user->id, // The teacher ID will be the same as the user ID
                'salary' => $faker->randomFloat(2, 3000, 5000),
                'degree' => $faker->word,
            ]);
        }

        // If the user is a manager (role_id = 2)
        if ($user->role_id == 2) {
            Supervisor::create([
                'id' => $user->id, // The manager ID will be the same as the user ID
            ]);
        }

        // If the user is a supervisor (role_id = 3)
        if ($user->role_id == 3) {
            Manager::create([
                'id' => $user->id, // The supervisor ID will be the same as the user ID
            ]);
        }
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
