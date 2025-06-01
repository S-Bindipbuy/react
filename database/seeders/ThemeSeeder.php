<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Themes;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        Themes::create(["name" => "light"]);
        Themes::create(["name" => "cupcake"]);
        Themes::create(["name" => "caramellatte"]);
        Themes::create(["name" => "tokyonight"]);
    }
}
