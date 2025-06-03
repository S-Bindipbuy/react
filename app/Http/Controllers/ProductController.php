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
        $validatedData = request()->validate([
            "name" => "required|string|max:255",
            "price" => "required|numeric|min:0",
            "category_id" => "required|exists:categories,id",
            "qty" => "required|integer|min:0",
            "description" => "nullable|string|max:1000",
            "image" => "nullable|image|mimes:jpeg,png,jpg,gif",


        ]);
        if (request()->hasFile("image")) {
            $image = request()->file("image");
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $validatedData['image'] = 'images/' . $imageName;
        }
        if (Product::create($validatedData)) {
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

    public function category()
    {
        return inertia()->render("Category", [
            "Categories" => Category::all(),
        ]);
    }

     public function Update()
    {

        $product = request()->except('image');

        if (request()->hasFile("image")) {
            $imagePath = request()->file("image")->store("products", "public");
            $product["image"] = $imagePath;
        }
         product::find(request()->id)->update($product);
        return redirect()->back();
    }


}
