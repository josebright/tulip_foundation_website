<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'v1'], function () {

    Route::get('/blogs', 'App\Http\Controllers\BlogController@index');
    Route::post('/blogs', 'App\Http\Controllers\BlogController@store');
    Route::delete('/blogs/{id}', 'App\Http\Controllers\BlogController@destroy');

    Route::get('/consultations', 'App\Http\Controllers\ConsultationController@index');
    Route::post('/consultations', 'App\Http\Controllers\ConsultationController@store');
    Route::delete('/consultations/{id}', 'App\Http\Controllers\ConsultationController@destroy');

    Route::get('/donations', 'App\Http\Controllers\DonateController@index');
    Route::post('/donations', 'App\Http\Controllers\DonateController@store');
    // Route::delete('/donations/{id}', 'App\Http\Controllers\DonateController@destroy');

    Route::get('/events', 'App\Http\Controllers\EventController@index');
    Route::post('/events', 'App\Http\Controllers\EventController@store');
    Route::delete('/events/{id}', 'App\Http\Controllers\EventController@destroy');

    Route::get('/galleries', 'App\Http\Controllers\GalleryController@index');
    Route::post('/galleries', 'App\Http\Controllers\GalleryController@store');
    Route::delete('/galleries/{id}', 'App\Http\Controllers\GalleryController@destroy');

    Route::get('/partnerForm', 'App\Http\Controllers\PartnerController@index');
    Route::post('/partnerForm', 'App\Http\Controllers\PartnerController@store');
    Route::delete('/partnerForm/{id}', 'App\Http\Controllers\PartnerController@destroy');

    Route::get('/projects', 'App\Http\Controllers\PressController@index');
    Route::post('/projects', 'App\Http\Controllers\PressController@store');
    Route::delete('/projects/{id}', 'App\Http\Controllers\PressController@destroy');

    Route::get('/subscribe', 'App\Http\Controllers\SubscriptionController@index');
    Route::post('/subscribe', 'App\Http\Controllers\SubscriptionController@store');

    Route::get('/teams', 'App\Http\Controllers\TeamController@index');
    Route::post('/teams', 'App\Http\Controllers\TeamController@store');
    Route::delete('/teams/{id}', 'App\Http\Controllers\TeamController@destroy');

    Route::get('/volunteers', 'App\Http\Controllers\VolunteerController@index');
    Route::post('/volunteers', 'App\Http\Controllers\VolunteerController@store');
    Route::delete('/volunteers/{id}', 'App\Http\Controllers\VolunteerController@destroy');

    Route::get('/audiences', 'App\Http\Controllers\AudienceController@index');
    Route::post('/audiences', 'App\Http\Controllers\AudienceController@store');
    Route::post('/audiences/{id}', 'App\Http\Controllers\AudienceController@update');
    Route::delete('/audiences/{id}', 'App\Http\Controllers\AudienceController@destroy');

    Route::get('/videos', 'App\Http\Controllers\YoutubeController@index');
    Route::post('/videos', 'App\Http\Controllers\YoutubeController@store');
    Route::delete('/videos/{id}', 'App\Http\Controllers\YoutubeController@destroy');

    Route::get('/getInvolved', 'App\Http\Controllers\GetInvolvedController@index');
    Route::post('/getInvolved', 'App\Http\Controllers\GetInvolvedController@store');
    Route::delete('/getInvolved/{id}', 'App\Http\Controllers\GetInvolvedController@destroy');

    Route::get('/partner', 'App\Http\Controllers\OurPartnerController@index');
    Route::post('/partner', 'App\Http\Controllers\OurPartnerController@store');
    Route::delete('/partner/{id}', 'App\Http\Controllers\OurPartnerController@destroy');

    Route::get('/categories', 'App\Http\Controllers\CATEGORYController@index');
    Route::post('/categories', 'App\Http\Controllers\CATEGORYController@store');
    Route::post('/categories/{id}', 'App\Http\Controllers\CATEGORYController@update');
    // Route::delete('/categories/{id}', 'App\Http\Controllers\CATEGORYController@destroy');

    Route::get('/partnership', 'App\Http\Controllers\PartnershipController@index');
    Route::post('/partnership', 'App\Http\Controllers\PartnershipController@store');
    Route::delete('/partnership/{id}', 'App\Http\Controllers\PartnershipController@destroy');
});