<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\Dashboard;

Route::get("/users", [AdminController::class, "all"]);
Route::get("/pos", [ProductController::class, "all"]);
Route::get("/dashboard/product", [ProductController::class, "store"]);
Route::middleware(Dashboard::class)->group(function () {
    Route::get("dashboard", [UserController::class, "All"]);
});
Route::get("/login", function () {
    return inertia()->render("Login");
});
Route::post("Login", [UserController::class, "Login"]);
Route::post("/ChangeTheme", [UserController::class, "Theme"]);
Route::post("/user_delete", [UserController::class, "Delete"]);
Route::post("/user_delete", [UserController::class, "Delete"]);

Route::get("/product", function () {
    return inertia()->render("Product");
});

Route::get("/end", function () {
    return dd(request()->all());
});
