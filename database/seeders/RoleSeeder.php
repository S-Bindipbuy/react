<?php

namespace Database\Seeders;
use App\Models\Role;
use Illuminate\Database\Seeder;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        Role::create(["Role" => "Admin", "user_id" => 1]);
        Role::create(["Role" => "User", "user_id" => 2]);
    }
}
