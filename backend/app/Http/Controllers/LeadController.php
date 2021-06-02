<?php

namespace App\Http\Controllers;

use App\Http\Requests\LeadRequest;
use App\Repositories\ILeadsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class LeadController extends Controller
{

    /**
     * @var \App\Repositories\ILeadsRepository
     */
    private ILeadsRepository $leadRepository;

    public function __construct(ILeadsRepository $leadRepository)
    {
        $this->leadRepository = $leadRepository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $leads = $this->leadRepository->all();

        return Response::json([
            'success' => true,
            'data' => $leads,
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
     * @param \App\Http\Requests\LeadRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(LeadRequest $request)
    {
        $input = $request->except('policies');
        $policies = $request->policies;
        $lead = $this->leadRepository->create($input);
        $lead->policies()->sync($policies);

        return Response::json([
            'success' => true,
            'data' => $lead
        ], 201);
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
