<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="clickMe">Submit your GUI</button>
    <p>
        you have submitted <span id="numClick"> 0 timees</span>.
    </p> 

    <script>
        var clicks = 0;

        function submitedGUIs () {
            clicks++;
            var numGUIsubmitted = document.getElementById('numClick');
            if (clicks == 1) 
                numGUIsubmitted.innerHTML = 'Once';
            //name been corrected 
            else 
                numGUIsubmitted.innerHTML = clicks + ' times';
        }
            var button = document.getElementById('clickMe');
            button.addEventListener('click', submitedGUIs);
        
        

    </script>
   </body>
</html>