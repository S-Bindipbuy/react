<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\Dashboard;
use App\Http\Middleware\Admin;
use App\Http\Middleware\User;
// Route for Admin

Route::get("/", function () {
    return redirect("login");
});

Route::middleware(Dashboard::class)->group(function () {
    Route::middleware(User::class) -> group(function () {
        Route::post('/checkout', [InvoiceController::class, 'Checkout']);
        Route::get("/pos", [ProductController::class, "Order"]);
    });

    Route::middleware(Admin::class) -> group(function() {
        Route::get("/dashboard", function() {
            return redirect("invoice");
        });
        Route::get("/user", [UserController::class, "All"]);
        Route::post("/insert/cat", [CategoryController::class, "Insert"]);
        Route::post("/update/cat", [CategoryController::class, "Update"]);
        Route::post("/delete/cat", [CategoryController::class, "Delete"]);
        Route::post("/user_delete", [UserController::class, "Delete"]);
        //Route for invoice

        // Route for Product
        Route::get("/invoice", [InvoiceController::class, "Invoice"]);
        Route::get("/product", [ProductController::class, "Show"]);
        Route::post('/update/product', [ProductController::class, 'Update']);
        Route::post("/insert/product", [ProductController::class, "Insert"]);
        Route::post("/delete/product", [ProductController::class, "Delete"]);
        Route::post("/insert/user", [UserController::class, "InsertUser"]);
        Route::post("/update/user", [UserController::class, "UpdateUser"]);

        //Route for category
        Route::get("/category", [ProductController::class, "category"]);
    });
});

// Route for User
/* Route::post("/ChangeTheme", [AdminController::class, "Theme"]); */

Route::get("/user/logout", [UserController::class, "Logout"]);

//Route for Login
Route::get("/login", function () {
    return inertia()->render("Login");
});

Route::post("Login", [UserController::class, "Login"]);
