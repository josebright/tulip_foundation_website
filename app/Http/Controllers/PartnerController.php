<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Partner;
use Illuminate\Http\Request;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partners = Partner::get();
		if(count($partners) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        return response()->json(['data'=>$partners], 200);
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
            'first_name' => 'required | min:3',
            'last_name' => 'required | min:3',
            'email' => 'required | email',
            'company' => 'required',
            'phone' => 'required | numeric',
            'about_us' => 'required | max:2000',
            'ur_interest' => 'required | max:1500'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        $partners = Partner::create($request->all());
        return response()->json(['message'=>'Application Submitted', 'data' => $partners], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function show(Partner $partner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function edit(Partner $partner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partner $partner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Partner  $partner
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $partner = Partner::find($id);
            if(is_null($partner)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $partner->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
