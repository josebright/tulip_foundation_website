<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000" />

        <title>Tulip Foundation</title>

        <!-- Fonts -->
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet">

        <link rel="icon" type="image/png" href="{{asset('./images/Frame.png')}}" />
       
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" ></div>
        
        <script src="https://use.fontawesome.com/840228ed78.js"></script>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
