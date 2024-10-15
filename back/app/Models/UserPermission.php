<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class UserPermission extends Model
{
    use HasFactory;

    protected $fillable = [
        'user',
        'permissions',
    ];

    public function user(): HasOne {
        return $this->hasOne(User::class, 'id', 'user');
    }
}
