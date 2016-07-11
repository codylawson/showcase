$(function() {
    //dynamically load the header and footer so we don't have to include them in every page
    $("#header").load("header.html", null, function() {
        setHeaderStyle($(window)[0]);
    });
    $("#footer").load("footer.html");

    var inView = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        var offset = 100;

        return (((elemTop + offset) <= docViewBottom) && ((elemBottom + offset) >= docViewTop));
    }

    //Set class on header when we're scrolled down
    var setHeaderStyle = function(e) {
        if (e.scrollY > 10) {
            $('.navbar-fixed-top').addClass('navbar-scrolled');
        } else {
            $('.navbar-fixed-top').removeClass('navbar-scrolled');
        }
    }
    $(window).scroll(function(e) {
        setHeaderStyle(e.delegateTarget);

        if (isScrolledIntoView('#skillsChart')) {
            if (inView) { return; }
                inView = true;
                var myChart = new Chart(ctx, chartOptions);
            } else {
                inView = false;
        }
    })

    //Chart defaults
    Chart.defaults.global.defaultFontColor = '#fff';
    Chart.defaults.global.defaultFontFamily = '"Lato", "Open Sans", "Helvetica", "Ariel", "sans-serif"';
    Chart.defaults.global.defaultFontSize = 14;

    //Do the chart stuff
    var ctx = document.getElementById("skillsChart");
    var chartOptions = {
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
    };
});
