<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserPermission>
 */
class UserPermissionFactory extends Factory
{
    public function definition(): array
    {
        $users = User::pluck('id');

        $permissions = [
            'transfers' => [
                'read' => fake()->numberBetween(0, 1),
                'deposit' => fake()->numberBetween(0, 1),
                'send' => fake()->numberBetween(0, 1),
                'receive' => fake()->numberBetween(0, 1),
                'return' => fake()->numberBetween(0, 1),
                'request-return' => fake()->numberBetween(0, 1),
            ],
            'users' => [
                'read' => fake()->numberBetween(0, 1),
                'alter' => fake()->numberBetween(0, 1),
                'delete' => fake()->numberBetween(0, 1),
            ],
        ];

        return [
            'user' => fake()->randomElement($users),
            'permissions' => json_encode($permissions),
        ];
    }
}
