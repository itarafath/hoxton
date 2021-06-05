<?php

namespace App\Http\Controllers;

use App\Repositories\IRoleRepository;
use Illuminate\Support\Facades\Response;

class RoleController extends Controller
{

    /**
     * @var \App\Repositories\IRoleRepository
     */
    private IRoleRepository $roleRepository;

    public function __construct(IRoleRepository $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    public function userByRole()
    {
        $role = $this->roleRepository->usersByRole();

        return Response::json([
            'success' => true,
            'data' => $role,
        ]);
    }
}
