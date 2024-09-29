<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'Full_name' => $this->faker->name(),  // Generates a random full name
            'username' => $this->faker->unique()->userName(),  // Generates a unique username
            'email' => $this->faker->unique()->safeEmail(),  // Generates a unique email address
            'email_verified_at' => now(),  // Sets the current timestamp for email verification
            'password' => bcrypt('password'),  // Default password for testing
            'role_id' => $this->faker->numberBetween(0, 3),             'address' => $this->faker->address(),  // Generates a random address
            'DOB' => $this->faker->date(),  // Generates a random date of birth
            'gender' => $this->faker->randomElement(['male', 'female']),  // Randomly assigns gender
            'phone' => $this->faker->phoneNumber(),  // Generates a random phone number
//            'image' => $this->faker->imageUrl(),  // Generates a random image URL
            'student_id' => null,  // Placeholder, adjust if you want to assign related student
            'teacher_id' => null,  // Placeholder, adjust if you want to assign related teacher
            'supervisor_id' => null,  // Placeholder, adjust if you want to assign related supervisor
            'manager_id' => null,  // Placeholder, adjust if you want to assign related manager
        ];
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
