<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="mouseOverMe">Check the dead line in the back of the project</div>
    <div class="highlightText">Have you submitted you GUIs?</div>
    <div>Check out the next project</div>
    <div class="highlightText">The deadline should be considered</div>

    <script>
        function Bold () {
            var divs = document.getElementByClassName('highlightText');
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.color = 'red';
                divs[i].style.fontWeight = 'bold';

            }

        }

        function restore () {
            var divs = document.getElementByClassName('highlightText');
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.color = 'black';
                divs[i].style.fontWeight = 'normal';


            }
        }
        //addEventListener
        var x =document.getElementById('mouseOverMe');
        x.addEventListener('mouseover', Bold);
        x.addEventListener('mouseout', restore);
    </script>
</body>
</html>