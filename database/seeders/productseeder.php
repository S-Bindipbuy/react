<?php

namespace Database\Seeders;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
class productseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      Product::insert([
        [
            'name'=> 'Pizza',
            'qty' => '10',
            'price' => '100',
            'image' => 'abc',
            'description' => 'hello from sokpuol',
            'category_id' => '1',
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now(),
        ]
        ]);
    }
}
