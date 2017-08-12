/**
 * Created by Admin on 2017/8/5.
 */
(function ($) {
    $('.navbar-nav a').hover(
        function () {
            $(this).addClass('active');
            var spanHover=$(this).children('span');
            $(spanHover[0]).addClass('activeBig');
        },
        function () {
            $(this).removeClass('active');
            $('.navbar-nav a:eq(0)').addClass('active');
            var spanHover=$(this).children('span');
            $(spanHover[0]).removeClass('activeBig');
        });
})($);
