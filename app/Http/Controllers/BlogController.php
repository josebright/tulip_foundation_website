<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = Blog::orderBy('id', 'desc')->get();
		if(count($blogs) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }

        return response()->json(['data'=>$blogs], 200);
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
            'author' => 'required | min:3',
            'title' => 'required | min:10',
            'article' => 'required | min:20',
            'picture' => 'required | mimes:png,jpg,jpeg'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        $blogs = Blog::create($request->all());
        
        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        $filenameWithNoExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('picture')->getClientOriginalExtension();
        $fileNameToStore = $filenameWithNoExt.'_'.date("Ymdhis").'.'.$extension;
        $request->file('picture')->move(storage_path("app/public/images/blog/"), $fileNameToStore);
        $fileNameToStore = "/storage/images/blog/".$fileNameToStore;
        $blogs['picture']= $fileNameToStore;
        $blogs->save();
        
        return response()->json(['message'=>'Blog Record Created', 'data' => $blogs], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $blogs = Blog::find($id);
        // if(is_null($blogs)){
        //     return response()->json(['message'=>'No Record Found'],404);
        // }
        // return response()->json(['data'=>$blogs],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
            if(is_null($blog)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $blog->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
