<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Press;
use Illuminate\Http\Request;

class PressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $presses = Press::orderBy('id', 'desc')->get();
		if(count($presses) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        foreach($presses as $press){
            $press->picture=json_decode($press->picture);
        }

        return response()->json(['data'=>$presses], 200);
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
            'article' => 'required | min:20'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        if(!$request->hasFile('picture'))
        {
            $validator = Validator::make($request->all(), [
                'picture' => 'required | mimes:png,jpg,jpeg'
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()], 401);
            }
        };

        $files = $request->file('picture');
        $images = array();

            foreach ($files as $file) 
            {
                $filenameWithExt = $file->getClientOriginalName();
                $filenameWithNoExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                $extension = $file->getClientOriginalExtension();
                if ($extension === 'png' || $extension === 'jpg' || $extension === 'jpeg') 
                {
                    $fileNameToStore = $filenameWithNoExt.'_'.date("Ymdhis").'.'.$extension;
                    $file->move(storage_path("app/public/images/project/"), $fileNameToStore);
                    $fileNameToStore = "/storage/images/project/".$fileNameToStore;
                    array_push($images, $fileNameToStore);
                }else {
                    return response()->json(['message'=>'File Must be an extension of png, jpg or jpeg'], 402);
                }
            }
            $presses = $request->all();
            $presses['picture'] = json_encode($images);
            $presses = Press::create($presses);
        
        return response()->json(['message'=>'Project Record Created', 'data' => $presses], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Press  $press
     * @return \Illuminate\Http\Response
     */
    public function show(Press $press)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Press  $press
     * @return \Illuminate\Http\Response
     */
    public function edit(Press $press)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Press  $press
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Press $press)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Press  $press
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $press = Press::find($id);
            if(is_null($press)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $press->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
