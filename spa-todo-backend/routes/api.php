<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get('/Tasks', [TaskController::class, 'index']);
Route::post('/Tasks', [TaskController::class, 'store']);
Route::put('/Tasks/{Task}', [TaskController::class, 'update']);
Route::delete('/Tasks/{Task}', [TaskController::class, 'destroy']);