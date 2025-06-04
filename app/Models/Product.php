<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use SoftDeletes, HasFactory;
    protected $table = "product";
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
