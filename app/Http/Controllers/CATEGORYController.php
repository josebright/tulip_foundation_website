<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\CATEGORY;
use Illuminate\Http\Request;

class CATEGORYController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = CATEGORY::get();
		if(count($categories) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        foreach($categories as $category){
            $category->description=json_decode($category->description);
        }

        return response()->json(['data'=>$categories], 200);
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
            'title' => 'required | min:3',
            'description' => 'required | min:10'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        $categories = CATEGORY::create($request->all());
        return response()->json(['message'=>'Category Record Submitted', 'data' => $categories], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CATEGORY  $cATEGORY
     * @return \Illuminate\Http\Response
     */
    public function show(CATEGORY $cATEGORY)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CATEGORY  $cATEGORY
     * @return \Illuminate\Http\Response
     */
    public function edit(CATEGORY $cATEGORY)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CATEGORY  $cATEGORY
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $categories= CATEGORY::find($id);
        if(is_null($categories)){
            return response()->json(array('message'=>'Record not Found'), 404); 
        }
        if($request->title){
            $categories->title = $request->title;
        }
        if($request->description){
            $categories->description = $request->description;
        }
        $categories->save();
      
        return response()->json(array('message'=>'Records Updated','data'=>$categories), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CATEGORY  $cATEGORY
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = CATEGORY::find($id);
            if(is_null($category)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $category->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
