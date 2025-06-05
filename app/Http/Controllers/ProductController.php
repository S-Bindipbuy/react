<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ProductController extends Controller
{
    public function Show() : Response
    {
        return inertia()->render("Product", [
            "Products" => Product::with("category")->get(),
            "categories" => Category::all(),
        ]);
    }
    public function Order() : Response
    {
        return inertia()->render("Pos", [
            "Products" => Product::with("category")->get(),
            "Categories" => Category::all(),
        ]);
    }
    public function Insert() : RedirectResponse
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
            $image->storeAs('images', $imageName, 'public');
            $validatedData['image'] = $imageName;
        }
        if (Product::create($validatedData)) {
            return redirect()
                ->back()
                ->with("success", "User created successfully!");
        }
        return redirect()->back(["error" => "Failed to create user"]);
    }

    public function Delete() : RedirectResponse
    {
        $id = request()->id;
        Product::find($id)->delete();
        return redirect("product");
    }

    public function category() : Response
    {
        return inertia()->render("Category", [
            "Categories" => Category::all(),
        ]);
    }

    public function Update() : RedirectResponse
    {

        $product = request()->except('image');

        if (request()->hasFile("image")) {
            $image = request()->file("image");
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('images', $imageName, 'public');
            $product["image"] = $imageName;
        }
         Product::find(request()->id)->update($product);
        return redirect()->back();
    }
}
