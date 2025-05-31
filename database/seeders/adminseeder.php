<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Carbon\Carbon;


class adminseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Admin::insert(
            [
                [
                    "name" => "admin",
                    "email" => "admin.example.com",
                    "password" => bcrypt("admin123"),
                    "image" => "abc.jpg",
                    "themes_id" => "1",
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ],

            ]
        );
    }
}
