<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::insert([
            [
                'name' => 'admin'
            ],
            [
                'name' => 'advisor'
            ],
            [
                'name' => 'coordinator'
            ],
        ]);

        $users = User::take(3)->skip(0)->get();
        $role = Role::find(1);
        foreach ($users as $user) {
            $user->roles()->attach($role);
        }


        $users = User::take(3)->skip(3)->get();
        $role = Role::find(2);
        foreach ($users as $user) {
            $user->roles()->attach($role);
        }

        $users = User::take(3)->skip(6)->get();
        $role = Role::find(3);
        foreach ($users as $user) {
            $user->roles()->attach($role);
        }
    }
}
