window.onload = function () {
    inputs = document.getElementsByTagName("input");

    //define the chart package
    google.charts.load('current', {
        'packages': ['corechart']
    });
    //set what is supposed to happen when the page loads. You typically want a state of the chart to show on load, but in this case, there is no data on load.
    //google.charts.setOnLoadCallback(drawChart);

    //submit requires text inputs to use parseInt to work as numbers
    function drawChart() {
        work = parseInt(document.getElementById('workvar').value);
        eat = parseInt(document.getElementById('eatvar').value);
        commute = parseInt(document.getElementById('commutevar').value);
        tv = parseInt(document.getElementById('tvvar').value);
        sleep = parseInt(document.getElementById('sleepvar').value);
        other = parseInt(document.getElementById('othervar').value);

        //replace data with variable names
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Week'],
            ['Work', work],
            ['Eat', eat],
            ['Commute', commute],
            ['Watch TV', tv],
            ['Sleep', sleep],
            ['Other', other]
        ]);
        var options = {
            title: 'Weekly Activities'
        };
        //the id is the DOM location to draw the chart    
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

    document.getElementById("form1").addEventListener("submit", (e) => {
        // let sum = Array.from(inputs).forEach(function(element) {
        //     sum +=  parseInt(element.value);
        // });
        
        // let sum = Array.from(inputs).reduce(function(total, input) {
        //     return total + parseInt(input.value);
        // }, 0);

        let sum = [...inputs].reduce(function(total, input) {
            return total + parseInt(input.value);
        }, 0);

        if (sum>168) {
            alert('You don\'t have more the 168h per week!');
            e.preventDefault();
        } else {
            drawChart(); 
        }
        e.preventDefault();
    });
}
