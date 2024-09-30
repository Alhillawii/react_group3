<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\School_class>
 */
class School_ClassFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'class_name' => $this->faker->word() . ' Class',  // Generates a random class name
            'created_at' => now(),  // Sets the current timestamp
            'updated_at' => now(),  // Sets the current timestamp
        ];
    }
}
