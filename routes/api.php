<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/user", function (Request $request) {
    return $request->user();
})->middleware("auth:sanctum");

/* Route::post("/insert", [ProductController::class, "Insert"]); */
/**/
/* Route::post("/delete", [ProductController::class, "Delete"]); */
/**/
/* Route::post("/insert/user", [UserController::class, "InsertUser"]); */
/**/
/* Route::post("/checkout", [InvoiceController::class, "Checkout"]); */
/* Route::get("/language/{locale}", function ($locale) { */
/*     session()->put("locale", $locale); */
/*     return redirect()->back(); */
/* }); */
/* Route::get("/navbar/lang", [Language::class, "Navbar"]); */
/**/
/* Route::post('/update', [ProductController::class, 'Update']); */
/**/
/**/
