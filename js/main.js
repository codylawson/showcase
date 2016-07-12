$(function() {
    var updateNav = function(elem) {
        if (!elem) {
            //get link by url
            pathname = $(location)[0].pathname;
            pathname = pathname.substring(1, pathname.length);

            //set header active based on this page
            $('.nav-item.active').removeClass('active');
            $('.nav-item [href*="' + pathname + '"]').parent().addClass('active');
        } else if ($(elem).hasClass('nav-link')){
            $('.nav-item.active').removeClass('active');
            $(elem).parent().addClass('active');
        }
    }

    //dynamically load the header and footer so we don't have to include them in every page
    $("#header").load("header.html", null, function() {
        updateNav();
        setHeaderStyle($(window)[0]);
    });
    $("#footer").load("footer.html", null, function() {
        //Footer chat bubble
        var chatOptions = [
            'Thanks for stopping by!',
            'Have you checked out <a href="my-work.html">my work</a> yet?',
            'Drop me a line if you\'d like to <a href="mailto:delmarlawson@gmail.com">chat</a>.',
            'It\'s pronounced "Jif" :D',
            'Here\'s another <a href="my-work.html">project</a> I worked on.',
            'Hey, check out this other <a href="my-work.html">project</a>!',
            'Have you seen my <a href="Cody_Lawson_Resume.pdf" target="_blank">resume</a>? Most impressive.'
        ];
        var randomOption = Math.floor(Math.random() * chatOptions.length);
        $('.footer-text').html(chatOptions[randomOption]);
    });

    var inView = false;
    var hasAnimated = false;

    function isScrolledIntoView(elem) {
        if ($(elem)[0]) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            var offset = 100;

            return (((elemTop + offset) <= docViewBottom) && ((elemBottom + offset) >= docViewTop));
        }
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

        if (isScrolledIntoView('#skillsChart') && !hasAnimated) {
            if (inView) {
                return;
            }
            inView = true;
            var myChart = new Chart(ctx, chartOptions);
            hasAnimated = true;
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

    Barba.Pjax.start();

    Barba.Dispatcher.on('transitionCompleted', function() {
        updateNav();
    });
    Barba.Dispatcher.on('linkClicked', function(elem) {
        updateNav(elem);
    });

    //animation from http://barbajs.org/transition.html
    var FadeTransition = Barba.BaseTransition.extend({
      start: function() {
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
      },

      fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
      },

      fadeIn: function() {
        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
          visibility : 'visible',
          opacity : 0
        });

        $el.animate({ opacity: 1 }, 400, function() {
          _this.done();
        });
      }
    });
    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };

});
