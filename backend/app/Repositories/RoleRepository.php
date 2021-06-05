<?php

namespace App\Repositories;

use App\Models\Role;

/**
 * Class PolicyRepository
 *
 * @package \App\Repositories
 */
class RoleRepository extends BaseRepository implements IRoleRepository
{
    public function __construct(Role $model)
    {
        parent::__construct($model);
    }

    public function usersByRole()
    {
        return $this->model->with('users:id,name')->select(['id', 'name'])->whereIn('id', [2, 3])->get()->groupBy('name')->map(function ($r) {
            return $r[0]['users'];
        });
    }
}
