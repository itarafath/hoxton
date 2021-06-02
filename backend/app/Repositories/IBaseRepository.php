<?php

namespace App\Repositories;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

/**
 * Class BaseRepository
 *
 * @package \App\Repositories
 */
interface IBaseRepository
{
    public function all(): Collection;

    public function create(array $attributes): Model;

    public function find($id): ?Model;
}
