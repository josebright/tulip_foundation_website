<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Consultation;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $consultations = Consultation::get();
		if(count($consultations) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        return response()->json(['data'=>$consultations], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required | min:3',
            'email' => 'required | email | unique:consultations',
            'state' => 'required',
            'country' => 'required',
            'phone' => 'required | numeric',
            'message' => 'required',
            'option' => 'required',
            'program' => 'required'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        $consultations = Consultation::create($request->all());
        return response()->json(['message'=>'Application Submitted', 'data' => $consultations], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Consultation  $consultation
     * @return \Illuminate\Http\Response
     */
    public function show(Consultation $consultation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Consultation  $consultation
     * @return \Illuminate\Http\Response
     */
    public function edit(Consultation $consultation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Consultation  $consultation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Consultation $consultation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Consultation  $consultation
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $consultation = Consultation::find($id);
            if(is_null($consultation)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $consultation->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
