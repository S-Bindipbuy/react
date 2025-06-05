<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Themes;
use App\Models\Role;
use Inertia\Response;

class UserController extends Controller
{
    public function All(): Response
    {
        return inertia("User", [
            "users" => User::with(["themes:id,name", "role"])->get([
                "id",
                "name",
                "email",
                "image",
                "themes_id",
            ]),
            "roles" => Role::all()
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
        if (Auth::user() -> isUser()) {
            return redirect("pos");
        }
        if (Auth::user() -> isAdmin()) {
            return redirect("dashboard");
        }
        return redirect("pos");
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
            "role_id" => "required",
        ]);

        if (request()->hasFile("image")) {
            $imagePath = request()->file("image");
            $imageName = time() . '.' . $imagePath -> getClientOriginalExtension();
            $imagePath -> storeAs('users', $imageName, 'public');
            $user["image"] = $imageName;
        }

        $newuser = User::create($user);
        return redirect() -> back();
    }
    public function UpdateUser()
    {
        $user = request()->except(["password", "image"]);

        if (request()->image) {
            if (request()->hasFile("image")) {
                $imagePath = request()->file("image");
                $imageName = time() . '.' . $imagePath -> getClientOriginalExtension();
                $imagePath -> storeAs('users', $imageName, 'public');
                $user["image"] = $imageName;
            }
        }
        if (request() -> password) {
            $user["password"] = request() -> password;
        }
        User::find(request()->id)->update($user);
        return redirect()->back();
    }
}
