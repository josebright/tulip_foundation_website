<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subcriptions = Subscription::get();
		if(count($subcriptions) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        return response()->json(['data'=>$subcriptions], 200);
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
            'email' => 'required | email | unique:subscriptions'
		]);
		if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }

        $mailchimp_url = "https://us1.api.mailchimp.com/3.0/lists/7879a0988e/members";
            $api_key = "04e9637ea2ae6be3c1ce1ffe8d51a401-us1";
            $headers = [
                    'Content-Type: application/json',
                    'Authorization:apikey '.$api_key
                ];
            $vars =[
                "email_address"=>$request->email,
                "status"=>"subscribed",
                ];
            $vars = json_encode($vars);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $mailchimp_url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $vars);
            $output = curl_exec($ch);
            curl_close ($ch);

        Subscription::create($request->all());
        return response()->json(['message'=>'You Have Successfully Subscribed'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function show(Subscription $subscription)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function edit(Subscription $subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscription $subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $subscription)
    {
        //
    }
}
