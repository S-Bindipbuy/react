<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function Insert() {
        $category = request() -> validate(["name" => "required"]);
        Category::create($category);
        return redirect("category");
    }

    public function Delete() {
        $id = request() -> validate(["id" => "required"]);
        Category::find($id["id"])->delete();
        return redirect("category");
    }

    public function Update() {
        $id = request() -> id;
        Category::find(request() -> id)->update(request() -> except(["id", "_token"]));
        return redirect("category");
    }
}
