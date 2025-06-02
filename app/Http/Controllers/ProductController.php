<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Response;

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
            "Products" => Product::with("category")->get(),
            "categories" => Category::all(),
        ]);
    }
    public function Insert()
    {
        if (Product::create(request()->except(["_token", "id"]))) {
            return redirect()
                ->back()
                ->with("success", "User created successfully!");
        }
        return response()->json(["error" => "Failed to create user"], 500);
    }

    public function Delete()
    {
        $id = request()->id;
        Product::find($id)->delete();
        return redirect("product");
    }
}
