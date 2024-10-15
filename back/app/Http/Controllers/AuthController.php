<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = Auth::attempt($request->only('email', 'password'));

        if ($login) {
            $token = $request->user()->createToken('main');

            return response([
                'done' => true,
                'access_token' => $token->plainTextToken,
            ]);
        }

        return response([
            'done' => false,
        ], 401);
    }

    public function logout(Request $request)
    {
        $logout = $request->user()->currentAccessToken()->delete();

        return response([
            'done' => $logout,
        ], 200);
    }
}
