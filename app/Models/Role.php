<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Role extends Model
{
    use SoftDeletes, HasFactory, Notifiable;
    protected $table = "roles";
    protected $guarded = [];

    public function user()
    {
        return $this->hasMany(User::class);
    }
}
