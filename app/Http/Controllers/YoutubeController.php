<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Youtube;
use Illuminate\Http\Request;

class YoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $youtube = Youtube::orderBy('id', 'desc')->get();
		if(count($youtube) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        return response()->json(['data'=>$youtube], 200);
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
            'url' => 'required',
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        $youtube = Youtube::create($request->all());
        return response()->json(['message'=>'Video Record Submitted', 'data' => $youtube], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function show(Youtube $youtube)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function edit(Youtube $youtube)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Youtube $youtube)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $youtube = Youtube::find($id);
            if(is_null($youtube)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $youtube->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
