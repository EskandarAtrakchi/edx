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
    
    <input id="getIt"></input>
    <ul>
        <span id="LI"></span>
    </ul>
    <script>
        function String (e) {
            if (e.keyCode == 13 ) {
                $('#LI').append('<li>' + $('#getIt').val() + '</li>');
                $('#getIt').val('');
            }
        }
        $('#getIt').keyup(String);
    </script>
</body>
</html>