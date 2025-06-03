<?php

use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Language;

Route::get("/user", function (Request $request) {
    return $request->user();
})->middleware("auth:sanctum");

Route::post("/insert", [ProductController::class, "Insert"]);

Route::post("/delete", [ProductController::class, "Delete"]);

Route::post("/insert/user", [UserController::class, "InsertUser"]);

Route::post("/checkout", [InvoiceController::class, "Checkout"]);
Route::get("/language/{locale}", function ($locale) {
    session()->put("locale", $locale);
    return redirect()->back();
});
Route::get("/navbar/lang", [Language::class, "Navbar"]);
