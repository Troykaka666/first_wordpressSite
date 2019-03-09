$(document).ready(function() {
    //cache the window object
    var $window = $(window);

    //PARALLAX BACKGROUDN EFFECT
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); //assigning the object
       $(window).scroll(function(){
            //scroll the background at var speed
            //the yPos is a negative value because we are scrolling it up

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            //put together our final backgroudn dposition
            var coords = '50%' + yPos + 'px';
            //move the background
            $bgobj.css({backgroundPosition: coords});
        });
    });
});