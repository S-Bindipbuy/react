<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/insert',[ProductController::class,'Insert']);

Route::post('/delete',[ProductController::class,'Delete']);

Route::post('/insert/user',[UserController::class,'InsertUser']);
