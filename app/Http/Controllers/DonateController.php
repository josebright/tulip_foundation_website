<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Donate;
use Illuminate\Http\Request;

class DonateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $donates = Donate::get();
		if(count($donates) <= 0){
			return response()->json(array('message'=>'No Record Found'), 404);
        }
        return response()->json(['data'=>$donates], 200);
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
            'first_name'  => 'required | min:3',
            'last_name'  => 'required | min:3',
            'email' => 'required | email',
            'country' => 'required',
            'address' => 'required | min:10',
            'city' => 'required',
            'state' => 'required',
            'zip' => 'required | numeric',
            'amount' => 'required | min:2',
            'anonymous' => 'required'
        ]);
        if ($validator->fails()) {
			return response()->json(['message' => $validator->errors()], 401);
        }
        
        $donate = $request->all();
        $first_name = $donate['first_name'];
        $last_name = $donate['last_name'];
        $email = $donate['email'];
        $country = $donate['country'];
        $address = $donate['address'];
        $city = $donate['city'];
        $state = $donate['state'];
        $zip = $donate['zip'];
        $amount = $donate['amount'];
        $payment_ref = substr($first_name, 0, 3).date("Ymdhis");
        $donate['payment_ref'] = $payment_ref;
        
        
        $url = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
        $vars ="grant_type=client_credentials";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_USERPWD, 'Ack5yHLx9a42WCEI-UfTAPa6MlqGGH9ykhm1xx-5Eevg9sAGQgKu-Gwvd9NOvZMa9e2l083MbkGo1N0C:EEXGudDldtfDKMORZtIw3Jsp2K_u1BoaQB1rdrMAKTDl2kxLHzEEiAfZJkNjj8HbR6PuoqkxAYpQBrlK');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $vars);
        $output = json_decode(curl_exec($ch));
        curl_close($ch);
        $access_token = $output->access_token;

        $_url = "https://api-m.sandbox.paypal.com/v2/checkout/orders";
        $headers = [
            "Content-Type: application/json",
            "Authorization: Bearer ".$access_token
        ];
        $_var =  '{
            "intent": "CAPTURE",
            "purchase_units": [
              {
                "amount": {
                  "currency_code": "USD",
                  "value": "100.00"
                }
              }
            ]
        }';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $_url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $_var);
        $_output = json_decode(curl_exec($ch));
        curl_close($ch);
        $url = $_output->links[1]->href;

        $donate = Donate::create($request->all());
        return response()->json(['message'=>'Thank You For Your Support', 'url' => $url], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Donate  $donate
     * @return \Illuminate\Http\Response
     */
    public function show(Donate $donate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Donate  $donate
     * @return \Illuminate\Http\Response
     */
    public function edit(Donate $donate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Donate  $donate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donate $donate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Donate  $donate
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $donate = Donate::find($id);
            if(is_null($donate)){
                return response()->json(['message'=>'No Record Found'],404);
        }
        $donate->delete();
        return response()->json(['message'=>'Record Deleted'],200);
    }
}
