<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create("product", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->foreignIdFor(App\Models\Category::class);
            $table->integer("qty");
            $table->float("price");
            $table->string("image");
            $table->string("description");
             $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("product");
    }
};
