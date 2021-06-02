<?php

namespace App\Providers;

use App\Repositories\ILeadsRepository;
use App\Repositories\IPolicyRepository;
use App\Repositories\LeadRepository;
use App\Repositories\PolicyRepository;
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
