<?php

namespace App\Repositories;

use App\Models\Policy;

/**
 * Class PolicyRepository
 *
 * @package \App\Repositories
 */
class PolicyRepository extends BaseRepository implements IPolicyRepository
{
    public function __construct(Policy $model)
    {
        parent::__construct($model);
    }
}
