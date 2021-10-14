<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('index');
});

Route::get('/partnership', function () {
    return view('index');
});

Route::get('/blog', function () {
    return view('index');
});
Route::get('/involve', function () {
    return view('index');
});
Route::get('/donation', function () {
    return view('index');
});
Route::get('/event', function () {
    return view('index');
});
Route::get('/project', function () {
    return view('index');
});
Route::get('/join', function () {
    return view('index');
});
Route::get('/about', function () {
    return view('index');
});
Route::get('/organize', function () {
    return view('index');
});
Route::get('/volunteer', function () {
    return view('index');
});
Route::get('/training', function () {
    return view('index');
});