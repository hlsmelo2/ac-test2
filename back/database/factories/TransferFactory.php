<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transfer>
 */
class TransferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $senders = User::pluck('id');
        $receivers = User::pluck('id');

        return [
            'amount' => fake()->randomFloat(2, 10.00, 1000.00),
            'sender' => fake()->randomElement($senders),
            'receiver' => fake()->randomElement($receivers),
            'return' => fake()->numberBetween(0, 1),
            'request-return' => fake()->numberBetween(0, 1),
        ];
    }
}
