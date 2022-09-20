<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jqueryForm</title>
    //</meta></meta><script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
</head>
<body>
    <form>
        <select name="choose">
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
        </select>
        <p>
            <input type="radio" name="Level" value="Low">Low</input>
            <input type="radio" name="Level" value="Mid">Mid</input>
            <input type="radio" name="Level" value="High">High</input>
            <p>
            <input type="checkbox" value="WalletOne">WalletOne</input>
            <input type="checkbox" value="WalletTwo">WalletTwo</input>
            <input type="checkbox" value="WalletThree">WalletThree</input>
    </form>
    <p>
        You have Entered <span id="gasFees">Wallet</span><span id="WalletNumber"></span><span id="coinSelection"></span>.
        
    <script>
        //handling select box 
        $("select : [ name = ' choose ' ] ") . change (function () {
            $('#coinSelection').html($(this).val());
        });
        //handling radio buttons 
        $("input : radio [ name = 'Level' ]").change(function () {
            if ( $(this).prop('checked')) {
                $('#gasFees').html($(this).val());
            }
        });

        //handling the check box
        var Checked = [];
        $('input : checkbox').change(function () {
            var value = $(this).val();
            if ($(this).prop('checked')) {
                Ckecked.push(value);
            }
            else {
                var index = Checked.indexOf(value);
                if (index != -1) {
                    Checked.splice(index, 1);
                }
            }
            $('#WalletNumber').html(' ');
            for (var i = 0; i < Checked.length; i ++) {
                $('#WalletNumber').append(Checked[i]);

            }

            if (i < Checked.length -1) {
                $('#WalletNumber').append(', ');
            }
            else {
                $('#WalletNumber').appen(' ');
            }
        });
    </script>
</body>
</html>