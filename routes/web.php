<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\Language;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\Dashboard;
// Route for Admin
Route::get("/admin", [AdminController::class, "all"]);
Route::get("/dashboard/product", [ProductController::class, "store"]);
Route::middleware(Dashboard::class)->group(function () {
    Route::get("/user", [UserController::class, "All"]);
    Route::get("/pos", [ProductController::class, "Order"]);

    //Route for category
    Route::get("/category", [ProductController::class, "category"]);

    //Route for invoice
    Route::get("/invoice", [InvoiceController::class, "Invoice"]);

    // Route for Product
    Route::post('/checkout', [InvoiceController::class, 'Checkout']);
    Route::get("/product", [ProductController::class, "Show"]);
    Route::post('/update/product', [ProductController::class, 'Update']);
    Route::post("/insert/product", [ProductController::class, "Insert"]);
    Route::post("/delete/product", [ProductController::class, "Delete"]);
    Route::post("/insert/user", [UserController::class, "InsertUser"]);

    //Route for category
    Route::get("/category", [ProductController::class, "category"]);


});
// Route for User
Route::post("/ChangeTheme", [AdminController::class, "Theme"]);
Route::post("/user_delete", [UserController::class, "Delete"]);
Route::post("/user_delete", [UserController::class, "Delete"]);

Route::get("/user/logout", [UserController::class, "Logout"]);
//Route for Login
Route::get("/login", function () {
    return inertia()->render("Login");
});
Route::post("Login", [UserController::class, "Login"]);

//Route for Language
Route::get("/language/{locale}", function ($locale) {
    session()->put("locale", $locale);
    return redirect()->back();
});
Route::get("/navbar/lang", [Language::class, "Navbar"]);
