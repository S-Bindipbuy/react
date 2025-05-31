<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Carbon\Carbon;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::insert(
            [
                [
                    "name" => "food",
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ],
                [
                    "name" => "drink",
                    "created_at" => Carbon::now(),
                    "updated_at" => Carbon::now(),
                ],
            ]
        );
    }
}
