<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    You have now accessed <span id="report"></span> times.
<p>
    your last vist was <span id="lastVisitDate"></span>.
</p>
<script>
    timesVisited = 0;
    lastVisitDate = 'never';

    if (localStorage.lastVisit) {
        var lastVisit = JSON.parse(localStorage.lastVisit);
        timesVisited = lastVisit.numVisits;
        lastVisitDate = lastVisit.date;
    }
    document.getElementById('lastVisitDate').innerHTML = lastVisitDate;
    timesVisited++;
    document.getElementById('report').innerHTML = timesVisit;
    //d
    var myLastVisit = {}
    myLastVisit.date = new Date();
    myLastVisit.numVisit = timesVisit;
    localStorage.lastVisit = JSON.stringify(myLastVisit);
</script> 
</body>
</html>









