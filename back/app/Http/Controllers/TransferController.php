<?php

namespace App\Http\Controllers;

use App\Models\Transfer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class TransferController extends Controller
{
    public function get_all(Request $request)
    {
        $user = $request->query->get('user');

        return Cache::remember("user:{$user}:transfers", 10, function () use ($user) {
            return Transfer::orWhere([
                'sender' => $user,
                'receiver' => $user,
            ])->with(['sender', 'receiver'])->get();
        });
    }

    public function get($id)
    {
        return Transfer::with(['sender', 'receiver'])->where(['id' => $id])->get();
    }

    private function transfer_response(bool $done, Transfer $transfer) {
        return response(compact('done', 'transfer'));
    }

    public function add(Request $request)
    {
        $request->validate([
            'sender' => 'required',
            'receiver' => 'required',
            'amount' => 'required',
        ]);

        $transfer = Transfer::create($request->all());
        $done = $transfer ? true : false;

        return $this->transfer_response($done, $transfer);
    }

    public function update($id, Request $request)
    {
        return 0;
    }

    public function delete(string $id)
    {
        $transfer = Transfer::find($id);

        return $this->transfer_response($transfer->deleteOrFail(), $transfer);
    }

    public function return(string $id, string $action)
    {
        if (!in_array($action, ['give', 'request'])) {
            return 0;
        }

        $transfer = Transfer::find($id);

        $property = $action === 'give' ? 'return' : 'request-return';
        $transfer->{$property} = true;

        return $this->transfer_response($transfer->updateOrFail(), $transfer);
    }
}
