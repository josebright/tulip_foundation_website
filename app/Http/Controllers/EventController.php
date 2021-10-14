<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = Event::orderBy('id', 'desc')->get();
		if(count($events) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }foreach($events as $event){
            $event->picture=json_decode($event->picture);
        }

        return response()->json(['data'=>$events], 200);
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
                    $file->move(storage_path("app/public/images/event/"), $fileNameToStore);
                    $fileNameToStore = "/storage/images/event/".$fileNameToStore;
                    array_push($images, $fileNameToStore);
                }else {
                    return response()->json(['message'=>'File Must be an extension of png, jpg or jpeg'], 402);
                }
            }
            $events = $request->all();
            $events['picture'] = json_encode($images);
            $events = Event::create($events);
        
        return response()->json(['message'=>'Event Record Created', 'data' => $events], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = Event::find($id);
            if(is_null($event)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $event->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
