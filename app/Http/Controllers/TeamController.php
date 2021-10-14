<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::get();
		if(count($teams) <= 0){
			return response()->json(['message'=>'No Record Found'], 404);
        }

        return response()->json(['data'=>$teams], 200);
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
            'name' => 'required | min:3',
            'position' => 'required | min:3',
            'picture' => 'required | mimes:png,jpg,jpeg',
            'email' => 'required | email | unique:teams'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        $teams = Team::create($request->all());

        $name = $request->name;
        $new_name = str_replace(' ', '', $name);
        $filenameWithExt = $request->file('picture')->getClientOriginalName();
        $extension = $request->file('picture')->getClientOriginalExtension();
        $fileNameToStore = $new_name.'_'.date("Ymdhis").'.'.$extension;
        $request->file('picture')->move(storage_path("app/public/images/team/"), $fileNameToStore);
        $fileNameToStore = "/storage/images/team/".$fileNameToStore;
        $teams['picture'] = $fileNameToStore;
        $teams->save();
        
        return response()->json(['message'=>'Team Record Created', 'data' => $teams], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $team = Team::find($id);
            if(is_null($team)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $team->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
