
function nav() {
    var $root = $('html, body');
    $(".logo").click(function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top)
            }, 1000, "easeInOutCubic");
            return false;
        }
        }
    })

    var link = $('.nav li');
    link.on('click',function(e){
        var target = $($(this).find('a').attr('data-parent')); 
        
        $('html, body').animate({
            scrollTop: target.offset().top
        },600);
        
        $(this).addClass('on');

        e.preventDefault();
    });
    
    $(window).on('scroll',function(){
        findPosition();
    });

    function findPosition(){
        $("section").each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 20){
                link.removeClass('on');
                $('.nav').find('[data-scroll="'+ $(this).attr('id') +'"]').parent().addClass('on');
            }
        });
    }
    
    findPosition();
}

function bodyOn(){
    var abTop = $('#about').offset().top;
    var scroll = document.documentElement.scrollTop;
    $("body")[scroll < abTop ? 'addClass' : 'removeClass']('bodyOn');
    $("header")[scroll > abTop-100 ? 'addClass' : 'removeClass']('top');
};

function homeTxt(){
    TweenLite.fromTo($("#home p"), 1.5, {y:100,opacity:0},{y:0,opacity:1,ease: Power4.easeOut}).delay(1);
}

function onScroll() {
    var $animation_elements = $('.onScroll');
    var $window = $(window);
  
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function(q) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.addClass('active');
        } else {
            $element.removeClass('active');
        }
    });
}


function skillsChart(){
    var abTop = $('#about').offset().top;
    var skTop = $('#skills').offset().top;
    var pfTop = $('#direction').offset().top;
    var scroll = document.documentElement.scrollTop;
    $("#skills")[scroll > skTop-500 ? 'addClass' : 'removeClass']('on');

    if( (scroll > abTop+100)  ) {
        $('.chart').easyPieChart({
            barColor:"#82bbb5",
            scaleColor:false,
            lineCap: "round",
            lineWidth:10,
            size:100,
            onStart: $.noop,
            onStop: $.noop,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }

}

function portfolioGrid(){
    var $grid = $('.grid').isotope({
        itemSelector: '.list',
        cellsByRow: {
            columnWidth: 200,
            rowHeight: 150
        },
        layoutMode: 'fitRows'
    });
    $('.pf_btn').on( 'click', 'button', function() {
        $('.pf_btn').find('.on').removeClass('on');
        $( this ).addClass('on');
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

function mobile(){
    if($(window).width() <= 579 ){
        $('#about .lt').removeClass('inLeft').addClass('inUp');
        $('#about .rt').removeClass('inRight').addClass('inUp');
    } else {
        $('#about .lt').removeClass('inUp').addClass('inLeft');
        $('#about .rt').removeClass('inUp').addClass('inRight');
    }
}

function btnTop() {

    var winH = $(window).height();
    var scrT = $(window).scrollTop();
    if ($(window).width() > 640) {
            $('.btnTop').css({
                bottom: '35px', "position": "fixed"
            });
        // }
    }

    $('.btnTop').on("click", function(){
        $('html, body').animate({scrollTop: '0'}, 300);
    });   
}

$(document).ready(function(){
    $("html").niceScroll();

    nav();
    skillsChart();
    portfolioGrid();
    
    btnTop();

    new Typed('.typed', {
        strings: ["Web Publisher Portfolio :)"],
        typeSpeed: 70,
        // backSpeed: 80,
        // loop: true,
        startDelay: 1450,
        smartBackspace: true,
        showCursor: false,
        cursorChar: "|",
    });
    
    var toggle_nav = $('.nav_toggle');
    toggle_nav.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open_nav_toggle');
        $('header').toggleClass('open');
        $('header .nav').toggleClass('open');
    });
    $("header .nav a").click(function(){
        if( $("header").hasClass("open") ){
            $("header").removeClass("open");
            $(".nav_toggle").removeClass("open_nav_toggle");
            $(".nav").removeClass("open");
        }
    });
    
});


$(window).on({
    "load":function(){
        bodyOn();
        homeTxt();
        onScroll();   
        $(".preloader").delay(1200).fadeOut("slow");
    },
    "resize":function(){
        onScroll();    
    },
    "scroll":function(){
        bodyOn();         
        skillsChart();
        onScroll();
        if ($(this).scrollTop() > 100) {
            $('.btnTop').stop().animate({ 'opacity': "1" }, { "duration": "50" });
        } else {
            $('.btnTop').stop().animate({ 'opacity': "0" }, { "duration": "50" });
        }
    }
});

// $(window).trigger('scroll');



