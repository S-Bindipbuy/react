<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Themes;
use Inertia\Response;

class UserController extends Controller
{
    public function All(): Response
    {
        return inertia("Dashboard", [
            "users" => User::with("themes:id,name")->get([
                "id",
                "name",
                "email",
                "image",
                "themes_id",
            ]),
        ]);
    }

    public function Login(): RedirectResponse
    {
        $user = request()->validate([
            "email" => "required|email",
            "password" => "required|min:8",
        ]);
        if (!Auth::attempt($user)) {
            return redirect("login");
        }
        return redirect("dashboard");
    }
    public function Logout(): RedirectResponse
    {
        Auth::logout();
        return redirect("login");
    }

    public function Theme(): RedirectResponse
    {
        $themes = request()->validate([
            "themes" => "required|string",
        ]);
        $auth = Auth::user();
        $auth->update([
            "themes_id" => Themes::find(request()->themes)
                ? request()->themes
                : $auth->themes_id,
        ]);
        return redirect()->back();
    }

    public function Delete(): RedirectResponse
    {
        $user = request()->validate([
            "id" => "required",
        ]);
        User::find($user["id"])->delete();
        return redirect()->back();
    }

    public function InsertUser()
    {
        $user = request()->validate([
            "name" => "required",
            "email" => "required|email",
            "image" => "nullable|image|mimes:jpeg,png,jpg",
            "password" => "required|min:8",
            "themes_id" => "required",
        ]);

        if (request()->hasFile("image")) {
            $imagePath = request()->file("image")->store("users", "public");
            $user["image"] = $imagePath;
        }

        $newuser = User::create($user);

        return response()->json(["status" => "1", $newuser]);
    }
    // public function Update()
    // {

    //     $user = request()->all();

    //     if (request()->hasFile("image")) {
    //         $imagePath = request()->file("image")->store("users", "public");
    //         $user["image"] = $imagePath;
    //     }
    //      User::find(request()->id)->update($user);
    //     return redirect()->back();
    // }
}
