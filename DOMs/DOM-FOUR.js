<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<input id="nameInput"></input>
<p>
Hello <span id="nameField">guest</span> thank you for your submissin 
 

    <script>
       function nameHandler(e) {
        if(e.keyCode == 13) {
            var nameInput = document.getElementById('nameInput');
            var nameField = document.getElementById('nameField');
            nameField.innerHTML = nameInput.value;
            nameField.style.backgroundColor = 'cyan';
            nameField.style.textTransform = 'capitalized';

        }
       }
       document.addEventListener('keyup', nameHandler);
       
    </script>
</body>
</html>