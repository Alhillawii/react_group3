<?php

namespace Database\Factories;

use App\Models\Manager;
use App\Models\Student;
use App\Models\Supervisor;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $roles = ['student', 'teacher', 'supervisor', 'manager'];
        $chosenRole = $this->faker->randomElement($roles);

        return [
            'description' => $this->faker->paragraph,
            'title' => $this->faker->sentence,
            'student_id' => $chosenRole === 'student' ? Student::factory() : null,
            'teacher_id' => $chosenRole === 'teacher' ? Teacher::factory() : null,
            'supervisor_id' => $chosenRole === 'supervisor' ? Supervisor::factory() : null,
            'manager_id' => $chosenRole === 'manager' ? Manager::factory() : null,
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }
}
