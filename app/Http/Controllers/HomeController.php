<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email','unique:users,email'],
        ]);
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make('123456');
        $user->save();

        return Redirect::route('userList')->with('msg', 'Organization created.');
    }

    public function userList()
    {
        $users = User::paginate();
        return Inertia::render('Users', ['users' => $users]);
    }

    public function editUser($id){
        $user = User::find($id);
        return Inertia::render('Edit', ['user' => $user]);
    }

    public function update($id,Request $request){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        return Redirect::route('userList')->with('msg', 'Updated Successfully!.');
    }
}
