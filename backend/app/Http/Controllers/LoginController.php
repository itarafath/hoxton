<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Class LoginController
 *
 * @package \App\Http\Controllers
 */
class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);


        if (auth()->attempt($credentials)) {
            $token = auth()->user()->createToken('HOXTON')->accessToken;
            return response()->json(['token' => $token], 200);
        } else {
            return response()->json(['error' => 'UnAuthorised'], 401);
        }


        return response(['user' => auth()->user(), 'token' => $token]);

    }
}
