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
    
    
    <ul>
        <li>Submission1</li>
        <li>Submission2</li>
        <li>Submission3</li>
        <li>Submission4</li>
        <li>Submission5</li>
    </ul>
    <script>
            $('li').hover(
                function () {
                    $(this).css (
                        'color' , 'red'
                    );
                    $(this).css (
                        'font-size' , '120%'
                    );
                },
                function () {
                    $(this).css (
                        'color' , 'black'
                    );
                    $(this).css (
                        'font-size' , '100%'
                    );
                }
            );
    </script>
</body>
</html>