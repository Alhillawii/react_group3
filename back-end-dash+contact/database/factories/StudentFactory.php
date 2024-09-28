<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\School_class;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'national_img' => $this->faker->imageUrl(),  // Generates a random image URL
            'parent_name' => $this->faker->name(),  // Generates a random name for the parent
            'school_class_id' => School_Class::factory(),  // Generates or associates a SchoolClass record
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
