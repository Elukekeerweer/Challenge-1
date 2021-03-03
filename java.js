

document.getElementsByClassName('menutoggle')[0].onclick = function () {
    var menu = document.getElementById('menu');
    if(menu.className == "active"){
        menu.className = "inactive";
    } else {
        menu.className = "active";
    }
}


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Launch crashes',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#999999',
            data: [4, 3.5, 11, 2, 3, 0]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {

                fontColor: 'black'
            }
        }
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {

    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Distribution of astronauts',
            backgroundColor: ["#B3DDF3", "#ffb6c1"],
            borderColor: '#FFFFFF',
            data: [501, 65]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {

                fontColor: 'black'
            }
        }
    }
});


var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
     data: {
        labels: ['Sleep', 'Launching satellites', 'Eating', 'Floating in space', 'Missions'],
        datasets: [{
            label: 'What does an astranout do in a day?',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#FFFFFF',
            data: [6, 8, 1, 6, 3]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {

                fontColor: 'black'
            }
        }
    }
});







