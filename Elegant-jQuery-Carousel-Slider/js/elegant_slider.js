/*---------------------------------------------------------------------------------------------

@author       Oscar Peña - @os-pena
@link            ???
@github        https://github.com/os-pena/Elegant-jQuery-Carousel-Slider
@version     0.0.2
@license      ISC license
based on Simple-jQuery-Carousel-Slider : https://github.com/paulmason/Simple-jQuery-Carousel-Slider
----------------------------------------------------------------------------------------------*/


jQuery(function ($) {
	this.elegantNamespace = this.elegantNamespace || {};
	var ns = this.elegantNamespace;
	
    // settings
    var $slider = $('.slider'); // class or id of carousel slider
    var $slide; // could also use 'img' if you're not using a li
    var $transition_time = 1000; // 1 second
    var $time_between_slides = 2300; // 2.3 seconds
    var $interval;
	ns.initialize = function(slide){

		$slide = slide;
    slides().fadeOut();

    // set active classes
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);

    $slider.hover(

    function () {
        pauseLoop(); // pause the loop
    },

    function () {
        startloop(); //scroll()
    });
		startloop();
	}
	
    function slides() {
        return $slider.find($slide);
    }

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

    //return initialize();
})();
