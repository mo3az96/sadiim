
$(window).on("load", function () {
    $(".loader img").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(".loader").remove();
    });
});
$(document).ready(function () {
    if ($(window).scrollTop() >= 40) {
        $(".fixed-header").addClass("scroll");
    } else {
        $(".fixed-header").removeClass("scroll");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $(".fixed-header").addClass("scroll");
        } else {
            $(".fixed-header").removeClass("scroll");
        }
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////Brands Slider/////////
    $('.brands-slider').owlCarousel({
        items: 7,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: false,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
            },
            500: {
                items: 4,
                dots: true,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7
            }
        }
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 4,
        autoplay: false,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    ////////////////////////////////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });

    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        $(".cat-li .nav-anchor").addClass("mo-accordion");
        $(".drop-ul").addClass("mo-panel");

        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
            $('.lang').addClass("lang-in");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $(".lang").removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
            $(".lang").removeClass("lang-in");
        });
    }


    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
    ////////////////////step5////////////////////
    $('.collapse.in').siblings('div').addClass('active');

    $('.collapse').on('show.bs.collapse', function () {
        $(this).siblings('div').addClass('active');
    });

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).siblings('div').removeClass('active');
    });

    $('input.level-sub').change(function () {
        if ($("input.level-sub:checked").val() == "sub") {
            $(this).parents(".collapse").find(".addition").fadeIn(300)
            alert(4444)
        } else {
            $(this).parents(".collapse").find(".addition").fadeOut(300)
            alert(3333)
        }
    });

});