<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jqueryForm</title>
    <script src = "jquery.js"></script>
</head>
<body>
    <form>
        <select name="choose">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <p>
            <input type="radio" name="species" value="dog">Dog</input>
            <input type="radio" name="species" value="cat">Cat</input>
            <input type="radio" name="species" value="bird">Bird</input>
            <p>
            <input type="checkbox" value="black">Black</input>
            <input type="checkbox" value="brown">Brown</input>
            <input type="checkbox" value="white">White</input>
    </form>
    <p>
        The animal that been registered is a <span id="AnimalType">animal</span><span id="AnimalColor"></span><span id="AnimalGender"></span>.
        
    <script>
        //handling select box 
        $("select : [ name = ' choose ' ] ") . change (function () {
            $('#AnimalGender').html($(this).val());
        });
        //handling radio buttons 
        $("input : radio [ name = 'species' ]").change(function () {
            if ( $(this).prop('checked')) {
                $('#AnimalType').html($(this).val());
            }
        });
    </script>
</body>
</html>