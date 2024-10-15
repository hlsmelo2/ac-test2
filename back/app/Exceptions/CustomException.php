<?php

namespace App\Exceptions;

use Exception;

class CustomException extends Exception
{
    public function render($e) {
        return response([
            'done' => false,
            'message' => $e->getMessage(),
        ], 401);
    }
}
