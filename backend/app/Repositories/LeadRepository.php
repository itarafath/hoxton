<?php

namespace App\Repositories;

use App\Models\Lead;

/**
 * Class LeadRepository
 *
 * @package \App\Repositories
 */
class LeadRepository extends BaseRepository implements ILeadsRepository
{
    public function __construct(Lead $model)
    {
        parent::__construct($model);
    }
}
