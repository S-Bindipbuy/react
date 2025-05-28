<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Response;
// use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function all(): Response
    {
        return inertia()->render("Pos", [
            "Products" => Product::with("category")->get(),
            "Categories" => Category::all(),
        ]);
    }
    public function store()
    {
        return inertia()->render("Product", [
            "Products" => Product::with("category"),
        ]);
    }
}
