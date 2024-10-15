<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Transfer extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'sender',
        'receiver',
        'return',
        'request-return',
    ];

    public function sender(): HasOne {
        return $this->hasOne(User::class, 'id', 'sender');
    }

    public function receiver(): HasOne {
        return $this->hasOne(User::class, 'id', 'receiver');
    }
}
