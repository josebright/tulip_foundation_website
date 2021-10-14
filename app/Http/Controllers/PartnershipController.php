<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Partnership;
use Illuminate\Http\Request;

class PartnershipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partnerships = Partnership::orderBy('id', 'desc')->get();
		if(count($partnerships) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }foreach($partnerships as $partnership){
            $partnership->brandLink=json_decode($partnership->brandLink);
        }

        return response()->json(['data'=>$partnerships], 200);
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
            'title' => 'required | min:10',
            'article' => 'required | min:20',
            'brandLink' => 'required',
            'picture' => 'required | mimes:png,jpg,jpeg'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        $partnerships = Partnership::create($request->all());
        
        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        $filenameWithNoExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('picture')->getClientOriginalExtension();
        $fileNameToStore = $filenameWithNoExt.'_'.date("Ymdhis").'.'.$extension;
        $request->file('picture')->move(storage_path("app/public/images/partnership/"), $fileNameToStore);
        $fileNameToStore = "/storage/images/partnership/".$fileNameToStore;
        $partnerships['picture']= $fileNameToStore;
        $partnerships->save();
        
        return response()->json(['message'=>'partnership Record Created', 'data' => $partnerships], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Partnership  $partnership
     * @return \Illuminate\Http\Response
     */
    public function show(Partnership $partnership)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Partnership  $partnership
     * @return \Illuminate\Http\Response
     */
    public function edit(Partnership $partnership)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Partnership  $partnership
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Partnership $partnership)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Partnership  $partnership
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $partnership = Partnership::find($id);
            if(is_null($partnership)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $partnership->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
