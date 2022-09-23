<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery-DOM</title>
    <script src = "jquery.js"></script>
</head>
<body>
    <button id="button">TimesOfSubmissions</button>
        <div>You have Submitted <span id="Submitted">0 times.</span> </div>


    <script>
        var Clicks = 0;
        function Handler () {
            Clicks ++;
            var numClickSpan = $('#Submitted');

            if (Clicks == 1) 
                numClickSpan.html('Once');
            
            else 
                numClickSpan.html(Clicks + 'times');
        }
        $('#button').click(Handler);
    </script>
</body>
</html>