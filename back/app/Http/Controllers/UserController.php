<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserPermission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class UserController extends Controller
{
    public function get_all()
    {
        return Cache::remember("app:user", 10, function () {
            return User::all();
        });
    }

    public function get($id)
    {
        return User::where(['id' => $id])->with('permissions')->firstOrFail();
    }

    public function profile()
    {
        $user = auth()->user();
        $user->permissions = UserPermission::where(['user' => $user->id])->first();

        return $user;
    }

    private function user_response(bool $done, User $user) {
        return response(compact('done', 'user'));
    }

    public function add(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::create($request->all());
        $done = $user ? true : false;

        if ($done) {
            $user->token = $user->createToken('main')->plainTextToken;
        }

        return $this->user_response($done, $user);
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
        ]);

        $data = $request->only('name', 'email', 'password');
        $user = User::find($id);
        $update_user = $user->updateOrFail($data);
        $user = $user->with('permissions')->first();

        return $this->user_response($update_user, $user);
    }

    public function delete(string $id)
    {
        $user = User::find($id);

        return $this->user_response($user->deleteOrFail(), $user);
    }
}
