<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\GetInvolved;
use Illuminate\Http\Request;

class GetInvolvedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getInvolved = GetInvolved::orderBy('id', 'desc')->get();
        if(count($getInvolved) < 1){
            return response()->json(['message'=>'No Record Found'], 404);
        }

        return response()->json(['data'=>$getInvolved], 200);
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
            'title' => 'required | min:5',
            'article' => 'required | min:10',
            'programDate' => 'required | date | after:tomorrow',
            'picture' => 'required | mimes:png,jpg,jpeg'
        ]);
        
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        $getInvolved = GetInvolved::create($request->all());
        
        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        $filenameWithNoExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('picture')->getClientOriginalExtension();
        $fileNameToStore = $filenameWithNoExt.'_'.date("Ymdhis").'.'.$extension;
        $request->file('picture')->move(storage_path("app/public/images/getInvolved/"), $fileNameToStore);
        $fileNameToStore = "/storage/images/getInvolved/".$fileNameToStore;
        $getInvolved['picture']= $fileNameToStore;
        $getInvolved->save();        
	
        
        return response()->json(['message'=>'GetInvolved Record Created', 'data' => $getInvolved], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GetInvolved  $getInvolved
     * @return \Illuminate\Http\Response
     */
    public function show(GetInvolved $getInvolved)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GetInvolved  $getInvolved
     * @return \Illuminate\Http\Response
     */
    public function edit(GetInvolved $getInvolved)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GetInvolved  $getInvolved
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GetInvolved $getInvolved)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GetInvolved  $getInvolved
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $getInvolved = GetInvolved::find($id);
            if(is_null($getInvolved)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $getInvolved->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
