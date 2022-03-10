<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Crudoparation;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login',[Crudoparation::class,'login']);
Route::post('/Addadmin',[Crudoparation::class,'Addadmin']);
Route::post('/Adduser',[Crudoparation::class,'Adduser']);
Route::get('/userinfo',[Crudoparation::class,'user_info']);
Route::get('/Edit_user/{id}',[Crudoparation::class,'edit_user']);
Route::put('/Update_user/{id}', [Crudoparation::class, 'updateuser']);
Route::delete('/Delete_user/{id}', [Crudoparation::class, 'deleteuser']);

Route::get('/admininfo',[Crudoparation::class,'admin_info']);
Route::get('/Edit_admin/{id}',[Crudoparation::class,'edit_admin']);
Route::put('/Update_admin/{id}', [Crudoparation::class, 'updateadmin']);
Route::delete('/Delete_admin/{id}', [Crudoparation::class, 'deleteadmin']);
Route::get('/User_profile/{id}',[Crudoparation::class,'User_profile']);
Route::put('/Update_user_profile/{id}', [Crudoparation::class, 'User_profile_update']);