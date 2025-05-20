<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\Themes;
use Inertia\Response;

class AdminController extends Controller
{
    public function All(): Response
    {
        return inertia("User", [
            "admins" => Admin::with("themes:id,name")->get([
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
        $admin = request()->validate([
            "email" => "required|email",
            "password" => "required|min:8",
        ]);
        if (!Auth::guard("admin")->attempt($admin)) {
            return redirect("login");
        }
        return redirect("dashboard");
    }
    public function Logout(): RedirectResponse
    {
        Auth::guard("admin")->logout();
        return redirect("login");
    }

    public function Theme(): RedirectResponse
    {
        $themes = request()->validate([
            "themes" => "required|string",
        ]);
        $auth = Auth::guard("admin")->user();
        $auth->update([
            "themes_id" => Themes::find(request()->themes)
                ? request()->themes
                : $auth->themes_id,
        ]);
        return redirect()->back();
    }

    public function Delete(): RedirectResponse
    {
        $admin = request()->validate([
            "id" => "required|string",
        ]);
        Admin::find($admin->id)->delete();
        return redirect("login");
    }
}
