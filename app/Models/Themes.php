<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Themes extends Model
{
    use SoftDeletes;
    protected $table = "themes";
    protected $guarded = [];
}
