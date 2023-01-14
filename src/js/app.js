const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] 
const dataExpense = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]

// setup block
const  data = {
    labels: labels,
    datasets: [{
        label: 'Daily Expense',
        data: dataExpense,
        borderRadius: 8,
        borderSkipped: false,
        backgroundColor: [
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(186, 34%, 60%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
        ]
    }]
}

// config block
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false
                }  
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false
                }   
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
}

// render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
)

// attribution
const attribution = document.querySelector('.attribution') 

setInterval(() => { // setting animation on attribution with the given seconds
    attribution.classList.add('attrAnimation')
}, 5000)
