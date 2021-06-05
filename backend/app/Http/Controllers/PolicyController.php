<?php

namespace App\Http\Controllers;

use App\Repositories\IPolicyRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class PolicyController extends Controller
{

    /**
     * @var \App\Repositories\IPolicyRepository
     */
    private IPolicyRepository $policyRepository;

    public function __construct(IPolicyRepository $policyRepository)
    {
        $this->policyRepository = $policyRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $policies = $this->policyRepository->all();

        return Response::json([
            'success' => true,
            'data' => $policies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->only('name');
        $policy = $this->policyRepository->create($input);

        $coordinators = $request->get('coordinators');
        $advisors = $request->get('advisors');

        $policy->users()->attach($advisors, ['role_id' => 2]);
        $policy->users()->attach($coordinators, ['role_id' => 3]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
