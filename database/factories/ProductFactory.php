<?php

namespace Database\Factories;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->word,
            "image" => "Anime-Girl-Rain.png",
            "qty" => $this->faker->randomDigit(),
            "description" => $this->faker->sentence,
            "price" => $this->faker->randomFloat(1, 1, 4),
            "category_id" => Category::factory(),
        ];
    }
}
