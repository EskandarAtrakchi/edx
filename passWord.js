<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>passWord</title>
    </meta></meta><script src="jquery.js"></script>

    <style>
        .errorText {
            color : red;
        }

        .errorBox {
            color : red;
        }

        .goodBox {
            border : 2px solid green;
        }

    </style>

</head>
<body>
        <input type="password" name="password"></input>
        <br>
        <span id="errorMessage" class="errorText" hidden>Please fix the following errors:</span>
        <ul>
            <li id="needsNumber" class="errorText" hidden>The password must contain a number</li>
            <li id="atLeast10Chars" class="errorText" hidden>The password must be at least 10 chars long</li>
        </ul>
        <span id="accessMessage" hidden>The password is OK!</span>
        <p>
            <button name="submit">Validate password</button>
        <script>
            $("button [name = 'submit']").click(function () {
                var passWordField = $("input [name = 'password']").val();
                var isOK = true;
                if (passWordField.length < 10) {
                    isOK = false;
                    $('#atLeast10Chars').show();
                }
                if (/\d/.test(passWordField) == false) {
                    isOK = false;
                    $('#needsNumber').show();
                }
                if (isOK == false) {
                    $('#accessMessage').hide();
                    $('#errorMessage').show();
                    passWordField.removeClass("goodBox").addClass("errorBox");
                }
                else {
                    $('.errorText').hide();
                    $('#accessMessage').show();
                    passWordField.removeClass("errorBox").addClass("goodBox");
                }
            return false; //to no to get the page refreshed 
            });
        </script>
</body>
</html>