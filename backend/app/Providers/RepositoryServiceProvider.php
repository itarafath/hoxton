<?php

namespace App\Providers;

use App\Repositories\ILeadsRepository;
use App\Repositories\IPolicyRepository;
use App\Repositories\IRoleRepository;
use App\Repositories\LeadRepository;
use App\Repositories\PolicyRepository;
use App\Repositories\RoleRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ILeadsRepository::class, LeadRepository::class);
        $this->app->bind(IPolicyRepository::class, PolicyRepository::class);
        $this->app->bind(IRoleRepository::class, RoleRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
