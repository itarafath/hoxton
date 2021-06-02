<?php

use App\Http\Controllers\{LeadController, PolicyController};
use Illuminate\Support\Facades\Route;

Route::resource('/leads', LeadController::class);
Route::resource('/policy', PolicyController::class);
