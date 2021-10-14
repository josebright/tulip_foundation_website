<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Audience;
use Illuminate\Http\Request;

class AudienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $audiences = Audience::get();
		if(count($audiences) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        foreach($audiences as $audience){
            $audience->resident=json_decode($audience->resident);
            $audience->service=json_decode($audience->service);
            $audience->country=json_decode($audience->country);
        }

        return response()->json(['data'=>$audiences], 200);
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
            'resident' => 'required',
            'service' => 'required',
            'country' => 'required'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        $audience = Audience::create($request->all());
        return response()->json(['message'=>'Audience Record Submitted', 'data' => $audience], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function show(Audience $audience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function edit(Audience $audience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $audience= Audience::find($id);
        if(is_null($audience)){
            return response()->json(array('message'=>'Record not Found'), 404); 
        }
        if($request->resident){
            $audience->resident = $request->resident;
        }
        if($request->service){
            $audience->service = $request->service;
        }
        if($request->country){
            $audience->country = $request->country;
        }
        $audience->save();
      
        return response()->json(array('message'=>'Records Updated','data'=>$audience), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Audience  $audience
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $audience = Audience::find($id);
            if(is_null($audience)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $audience->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
