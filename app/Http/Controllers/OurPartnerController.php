<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\OurPartner;
use Illuminate\Http\Request;

class OurPartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partners = OurPartner::orderBy('id', 'desc')->get();
		if(count($partners) <= 0){
			return response()->json(['message'=>'No Record Found'], 404);
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
            'picture' => 'required | mimes:png,jpg,jpeg',
            'url' => 'required'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        $partner = OurPartner::create($request->all());

        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        $filenameWithNoExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('picture')->getClientOriginalExtension();
        $fileNameToStore = $filenameWithNoExt.'_'.date("Ymdhis").'.'.$extension;
        $request->file('picture')->move(storage_path("app/public/images/partner/"), $fileNameToStore);
        $fileNameToStore = "/storage/images/partner/".$fileNameToStore;
        $partner['picture']= $fileNameToStore;
        $partner->save();
        
        return response()->json(['message'=>'Partner Record Created', 'data' => $partner], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OurPartner  $ourPartner
     * @return \Illuminate\Http\Response
     */
    public function show(OurPartner $ourPartner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OurPartner  $ourPartner
     * @return \Illuminate\Http\Response
     */
    public function edit(OurPartner $ourPartner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OurPartner  $ourPartner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OurPartner $ourPartner)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OurPartner  $ourPartner
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $partner = OurPartner::find($id);
            if(is_null($partner)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $partner->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
