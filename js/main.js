window.scrollBy({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

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

$(document).ready(() => {
    console.log('object');
    ScrollReveal().reveal('.first', {
        easing: 'ease-in',
        delay: 200,
        rotate: {
            x: 20
        },
        viewFactor: 0.5,
        reset: true,
        opacity: 0.1
    });
})
var options = {
    strings: ['Hi^1000, I\'m Shubham Yadav^1000 <br> <span class="f_28">(Web Developer)</span>'],
    typeSpeed: 120,
    backSpeed: 100,
    startDelay: 1000,
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
}