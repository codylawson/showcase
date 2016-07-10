$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $(window).scroll(function(e) {
        if (e.delegateTarget.scrollY > 10) {
            $('.navbar-fixed-top').addClass('navbar-scrolled');
        } else {
            $('.navbar-fixed-top').removeClass('navbar-scrolled');
        }
    })

    //Chart defaults
    Chart.defaults.global.defaultFontColor = '#fff';
    Chart.defaults.global.defaultFontFamily = '"Lato", "Open Sans", "Helvetica", "Ariel", "sans-serif"';
    Chart.defaults.global.defaultFontSize = 14;

    //Do the chart stuff
    var ctx = document.getElementById("skillsChart");
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ["HTML", "CSS", "Javascript", "Design", "Data Vis"],
            datasets: [{
                data: [8, 9, 7, 8, 6],
                backgroundColor: [
                    '#3A98DE',
                    '#EE5A5A',
                    '#65D47C',
                    '#F2B52E',
                    '#7461A8'
                ],
                borderColor: '#182631'
            }]
        },
        options: {
            tooltips: {
                bodyFontSize: 14,
                callbacks: {
                    title: function(item, data) {
                        return data.labels[item[0].index];
                    },
                    label: function(item, data) {
                        return ''
                    }
                }
            },
            legend: {
                position: 'top',
            },
            responsive: true,
            scale: {
                display: false,
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            }
        }
    });
});
