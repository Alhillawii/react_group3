<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => null,
            'salary' => $this->faker->randomFloat(2, 3000, 10000),  // Generates a salary between 3000 and 10000
            'degree' => $this->faker->randomElement(['Bachelor', 'Master', 'PhD']),  // Random degree value
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
