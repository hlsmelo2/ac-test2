<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        \App\Models\UserPermission::factory(10)->create();
        \App\Models\Transfer::factory(10)->create();

        $admin = \App\Models\User::factory()->create([
            'email' => 'admin@admin.com',
            'name' => 'Admin',
            'password' => Hash::make('password'),
        ]);

        \App\Models\UserPermission::factory()->create([
            'user' => $admin->getAttribute('id'),
            'permissions' => json_encode([
                'transfers' => [
                    'read' => 1,
                    'deposit' => 1,
                    'send' => 1,
                    'receive' => 1,
                    'return' => 1,
                    'request-return' => 1,
                ],
                'users' => [
                    'read' => 1,
                    'alter' => 1,
                    'delete' => 1,
                ],
            ]),
        ]);
    }
}
