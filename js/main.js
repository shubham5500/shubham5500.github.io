// window.scrollBy({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
// });

var options = {
    strings: ['Hi^1000, I\'m Shubham Yadav;^1000 <br> <span class="f_28 fm_14">a web developer</span>'],
    typeSpeed: 120,
    backSpeed: 100,
    startDelay: 2000,
    showCursor: true,
    contentType: 'html',
    cursorChar: " _",
    loop: false,
    fadeOut: true,
    autoInsertCss: true
}
var typed = new Typed(".typing-element", options);

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
    var animationInterval = 20; //lower is faster
    var scrollSpeed = 20; //lower is faster

    if (end == null) {
        end = $(window).scrollTop();
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
        interval = setInterval(function () {
            var scrollTop = $(window).scrollTop();
            var step = Math.round((end - scrollTop) / scrollSpeed);
            if (scrollTop <= 0 ||
                scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
                goUp && step > -1 ||
                !goUp && step < 1) {
                clearInterval(interval);
                interval = null;
                end = null;
            }
            $(window).scrollTop(scrollTop + step);
        }, animationInterval);
    }
};

document.onreadystatechange = function(){
    var state = document.readyState;
    if(state == 'interactive' || state == 'loading'){
        document.getElementById('loader').style.visibility = 'visible';
        document.getElementById('body').style.visibility = 'hidden';
    }else if(state == 'complete'){
        document.getElementById('loader').style.visibility = 'hidden';
        document.getElementById('loader').style.zIndex = '-10000000';
        document.getElementById('body').style.visibility = 'visible';
    }
}

$(document).ready(function() {
    // $("#project-carousel").owlCarousel({
    //     items : 1,
    //     lazyLoad : true,
    //     navigation : true,
    //     pagination: false
    // });
   

    var carousel = $(".project_card_wrapper").waterwheelCarousel({
        flankingItems: 2,
    });

    $('.arrow_carousel').on('click', function(){
        var owl = $("#project-carousel").data('owlCarousel');
        var className = $(this).attr('class').split(' ');
        className[1] === 'left'? carousel.prev() : carousel.next();
    });
    
    ScrollReveal().reveal('.first', {
        easing: 'steps(5)',
        delay: 200,
        rotate: {
            x: 20
        },
        viewFactor: 0.3,
        reset: true,
    });

    var hobbyArray = [
        'a crazy football fan', 
        'one hell of a cook',
        'a redditor', 
        'love to watch tv shows'
    ];

    $('.card_body.hobby li.col-3 div').each(function(index){
        $(this).on('mouseenter',function(){
            $('.connect_card .card_foot p')
                    .text(`${hobbyArray[index]}`)
                    .addClass('fade');
        });
        $(this).on('mouseleave',function(){
            $('.connect_card .card_foot p')
                    .removeClass('fade')
                    .text('');
        });
    });
});
