<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class,'userList'])->name('userList');

Route::get('/create', [HomeController::class,'index'])->name('users.create');
Route::post('store-name', [HomeController::class,'store'])->name('store.name');
Route::get('edit-user/{id}',[HomeController::class,'editUser'])->name('users.edit');
Route::post('update-name/{id}', [HomeController::class,'update'])->name('update.name');
