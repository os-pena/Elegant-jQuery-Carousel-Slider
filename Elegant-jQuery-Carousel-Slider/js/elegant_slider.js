/*---------------------------------------------------------------------------------------------

@author       Oscar Peña - @os-pena
@link            ???
@github        https://github.com/os-pena/Elegant-jQuery-Carousel-Slider
@version     0.0.2
@license      ISC license
based on Simple-jQuery-Carousel-Slider : https://github.com/paulmason/Simple-jQuery-Carousel-Slider
----------------------------------------------------------------------------------------------*/


jQuery(function ($) {

    // settings
    var $slider = $('.slider'); // class or id of carousel slider
    var $slide = 'li'; // could also use 'img' if you're not using a li
    var $transition_time = 1000; // 1 second
    var $time_between_slides = 2300; // 2.3 seconds
    var $interval;

    function slides() {
        return $slider.find($slide);
    }

    slides().fadeOut();

    // set active classes
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);

    // auto scroll 
    function startloop() {
        $interval = setInterval(

        function () {
            var $i = $slider.find($slide + '.active').index();

            slides().eq($i).removeClass('active');
            slides().eq($i).fadeOut($transition_time);

            if (slides().length == $i + 1) $i = -1; // loop to start
            slides().eq($i + 1).addClass('active');
            slides().eq($i + 1).fadeIn($transition_time+ 2000);
        }, $transition_time + $time_between_slides);
    }
    function pauseLoop() {
        window.clearInterval($interval);
    }

    $slider.hover(

    function () {
        pauseLoop(); // pause the loop
    },

    function () {
        startloop(); //scroll()
    });
    return startloop();
});
