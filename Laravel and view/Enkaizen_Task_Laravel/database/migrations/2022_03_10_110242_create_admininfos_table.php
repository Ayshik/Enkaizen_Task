<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmininfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admininfos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Username')->unique();
            $table->string('Fullname')->nullable();
            $table->string('Phoneno')->nullable();
            $table->string('Address')->nullable();
            $table->string('Password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admininfos');
    }
}
