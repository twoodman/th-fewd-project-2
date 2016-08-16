$(document).ready(function() {
    $('a[href^="#"]').on('click',function (el) {
        el.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing');
    });
});