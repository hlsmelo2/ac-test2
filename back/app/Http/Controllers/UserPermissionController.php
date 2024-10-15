<?php

namespace App\Http\Controllers;

use App\Models\UserPermission;
use Illuminate\Http\Request;

class UserPermissionController extends Controller
{

    private function user_permission_response(bool $done, UserPermission $user_permission) {
        return response(compact('done', 'user_permission'));
    }

    public function upinsert($id, Request $request)
    {
        $request->validate([
            'permissions' => 'required',
        ]);

        $data = $request->only('permissions');
        $user_permission = UserPermission::where(['user' => $id])->first();

        if (!$user_permission) {
            $user_permission = new UserPermission();
            $user_permission->user = $id;
        }

        $user_permission->permissions = json_encode($data['permissions']);
        $save = $user_permission->saveOrFail();

        return $this->user_permission_response($save, $user_permission);
    }
}
