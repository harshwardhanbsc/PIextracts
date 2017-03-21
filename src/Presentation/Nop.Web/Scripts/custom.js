var screenWidth = $(window).width() + "px";
var screenHeight = $(window).height() + "px";
$(".screenheight").css({
    height: screenHeight
});
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset();
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}
$(document).ready(function (e) {

    if (window.location.pathname === "/") {
        $("body").removeClass("innerbody");
        $("body").addClass("homebody");
        $("footer").css("display", "none");
    } else {
        $("body").removeClass("homebody");
        $("body").addClass("innerbody");
        $("footer").css("display", "block");
    }
    $('.tab-item').click(function () {
        $("body").removeClass("homebody");
        $("body").addClass("innerbody");
        $('.tab-item > a').removeClass("active");
        $(this).find('a').addClass("active");
        if ($(window).width() <= '751') {
            $('.category-home.prelative').css('position', 'relative');
        }

        //var queryString = $(this).children('a').attr('href');
        //var varArray = queryString.split("#");

        ////var param1 = varArray[0];
        //var param2 = varArray[1];
        //$(".tabitem").removeClass("active");
        //$(".tab-panes").removeClass("active");
        //$("#" + param2).addClass("active");
        //$('.tabitem[ data-val=' + param2 + ']').addClass("active");
    });
    //var revapi = $(".rev_slider").revolution({
    //    sliderType: "standard",

    //    sliderLayout: "fullscreen",
    //    dottedOverlay: "none",
    //    delay: 5000,

    //    responsiveLevels: [1240, 1024, 778],
    //    visibilityLevels: [1240, 1024, 778],
    //    gridwidth: [1170, 1024, 778, 480],
    //    gridheight: [585, 768, 960, 720],
    //    lazyType: "none",
    //    parallax: {
    //        origo: "slidercenter",
    //        speed: 1000,
    //        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
    //        type: "scroll"
    //    },
    //    shadow: 0,
    //    spinner: "off",
    //    stopLoop: "on",
    //    stopAfterLoops: 0,
    //    stopAtSlide: -1,
    //    shuffle: "off",
    //    autoHeight: "off",
    //    fullScreenAutoWidth: "off",
    //    fullScreenAlignForce: "off",
    //    fullScreenOffsetContainer: "",
    //    fullScreenOffset: "0",
    //    hideThumbsOnMobile: "off",
    //    hideSliderAtLimit: 0,
    //    hideCaptionAtLimit: 0,
    //    hideAllCaptionAtLilmit: 0,
    //    debugMode: false,
    //    fallbacks: {
    //        simplifyAll: "off",
    //        nextSlideOnWindowFocus: "off",
    //        disableFocusListener: false,
    //    }
    //});
});


var THEMEMASCOT = THEMEMASCOT || {};

(function ($) {
    "use strict";



    THEMEMASCOT.isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (THEMEMASCOT.isMobile.Android() || THEMEMASCOT.isMobile.BlackBerry() || THEMEMASCOT.isMobile.iOS() || THEMEMASCOT.isMobile.Opera() || THEMEMASCOT.isMobile.Windows());
        }
    };

    THEMEMASCOT.isRTL = {
        check: function () {
            if ($("html").attr("dir") == "rtl") {
                return true;
            } else {
                return false;
            }
        }
    };



    THEMEMASCOT.initialize = {






        /* ---------------------------------------------------------------------- */
        /* ------------------------------- Platform detect  --------------------- */
        /* ---------------------------------------------------------------------- */
        TM_platformDetect: function () {
            if (THEMEMASCOT.isMobile.any()) {
                $html.addClass("mobile");
            } else {
                $html.addClass("no-mobile");
            }
        },




        TM_customDataAttributes: function () {
            $('[data-bg-color]').each(function () {
                $(this).css("cssText", "background: " + $(this).data("bg-color") + " !important;");
            });
            $('[data-bg-img]').each(function () {
                $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
            });
            $('[data-text-color]').each(function () {
                $(this).css('color', $(this).data("text-color"));
            });
            $('[data-font-size]').each(function () {
                $(this).css('font-size', $(this).data("font-size"));
            });
            $('[data-height]').each(function () {
                $(this).css('height', $(this).data("height"));
            });
            $('[data-border]').each(function () {
                $(this).css('border', $(this).data("border"));
            });
            $('[data-margin-top]').each(function () {
                $(this).css('margin-top', $(this).data("margin-top"));
            });
            $('[data-margin-right]').each(function () {
                $(this).css('margin-right', $(this).data("margin-right"));
            });
            $('[data-margin-bottom]').each(function () {
                $(this).css('margin-bottom', $(this).data("margin-bottom"));
            });
            $('[data-margin-left]').each(function () {
                $(this).css('margin-left', $(this).data("margin-left"));
            });
        },




        /* ---------------------------------------------------------------------- */
        /* --------------------------- Home Resize Fullscreen ------------------- */
        /* ---------------------------------------------------------------------- */
        TM_resizeFullscreen: function () {
            var windowHeight = $window.height();
            $('.fullscreen, .revslider-fullscreen').height(windowHeight);
        },







    };




    THEMEMASCOT.documentOnResize = {

        init: function () {

            var t = setTimeout(function () {

                THEMEMASCOT.initialize.TM_resizeFullscreen();

            }, 0);

        }

    };



    /* ---------------------------------------------------------------------- */
    /* -------------------------- Declare Variables ------------------------- */
    /* ---------------------------------------------------------------------- */
    var $window = $(window),
        $html = $('html'),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $footer = $('#footer'),
        $sections = $('section');

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Call Functions -------------------------- */
    /* ---------------------------------------------------------------------- */



    $window.on('resize', THEMEMASCOT.documentOnResize.init);

})(jQuery);

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

