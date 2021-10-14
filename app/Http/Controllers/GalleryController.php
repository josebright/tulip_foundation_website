<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galleries = Gallery::orderBy('id', 'desc')->get();
		if(count($galleries) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        return response()->json(['data'=>$galleries], 200);
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
            'picture' => 'required |mimes:png,jpg,jpeg'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        $galleries = Gallery::create($request->all());

        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        $extension = $request->file('picture')->getClientOriginalExtension();
        $fileNameToStore = date("Ymdhis").'.'.$extension;
        $request->file('picture')->move(storage_path("app/public/images/gallery/"), $fileNameToStore);
        $fileNameToStore = "/storage/images/gallery/".$fileNameToStore;
        $galleries['picture'] = $fileNameToStore;
        $galleries->save();
        
        return response()->json(['message'=>'Gallery Record Created', 'data' => $galleries], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gallery = Gallery::find($id);
            if(is_null($gallery)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $gallery->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
