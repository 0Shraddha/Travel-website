var ctx = document.getElementById('myChart').getContext('2d');
var hotels = document.getElementById('hotels').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Europe', 'Asia', 'Africa', 'Antarctica', 'NA', 'SA'],
        datasets: [{
            label: 'Popular Destinations',
            data: [22, 29, 23, 15, 22, 32],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        scales:{
            x:{
                ticks:{
                    color:'#f1f1f1'
                },
            },
            y : {
                ticks:{
                  color : '#f1f1f1'  
                },
            }
        }
    }
});
var hotels = new Chart(hotels, {
    type: 'bar',
    data: {
        labels: ['Europe', 'Asia', 'Africa', 'Antarctica', 'NA', 'SA'],
        datasets: [{
            label: 'Popular Hotels',
            data: [22, 29, 23, 15, 22, 32],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        scales:{
            x:{
                ticks:{
                    color:'#f1f1f1'
                },
            },
            y : {
                ticks:{
                  color : '#f1f1f1'  
                },
            },
        }
    }
});