<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransferController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserPermissionController;
use App\Models\UserPermission;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('auth/login', [AuthController::class, 'login']);

$crud_routes = [
    'users' => UserController::class,
    'transfers' => TransferController::class,
];

foreach ($crud_routes as $route => $controller) {
    Route::group(['middleware' => 'auth:sanctum', 'prefix' => $route], function () use ($controller) {
        Route::get('/', [$controller, 'get_all']);
        Route::post('/', [$controller, 'add']);
        Route::get('/{id}', [$controller, 'get']);
        Route::put('/{id}', [$controller, 'update']);
        Route::delete('/{id}', [$controller, 'delete']);
    })->middleware(['auth:sanctum']);
}

Route::post('/users', [UserController::class, 'add'])->withoutMiddleware('auth:sanctum');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('transfers/deposit', [TransferController::class, 'add']);
    Route::put('transfers/{id}/return/{action}', [TransferController::class, 'return']);
    Route::get('profile', [UserController::class, 'profile']);
    Route::post('/users/{id}/permissions', [UserPermissionController::class, 'upinsert']);
    Route::post('auth/logout', [AuthController::class, 'logout']);
});
