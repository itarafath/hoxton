<?php

use App\Http\Controllers\{LeadController, PolicyController};
use Illuminate\Support\Facades\Route;

Route::resource('/leads', LeadController::class);
Route::resource('/policy', PolicyController::class);
Route::get('/user/users-by-role', [\App\Http\Controllers\RoleController::class, 'userByRole']);
Route::post('/login', [\App\Http\Controllers\LoginController::class, 'login']);
