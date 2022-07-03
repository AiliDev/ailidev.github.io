$(() => {
    // Make every section height = visible window
    var viewportHeight = window.innerHeight;
    $(".header, .about-us").css({
        height: viewportHeight,
    });

    // Fix header
    // $(".header").css({
    //     "margin-top": -$(".navbar").outerHeight(),
    // });
    if (window.innerWidth < 575.98) {
        // $(".header").css({
        //     "margin-top": -$(".navbar").outerHeight() + -15,
        // });
    } else if (window.innerWidth > 767.98) {
    } else if (window.innerWidth > 991.98) {
    } else if (window.innerWidth > 1199.98) {
    } else if (window.innerWidth > 1399.98) {
    }

    // $(".section").css({
    //     "padding-top": $(".navbar").outerHeight(),
    //     "padding-bottom": $(".navbar").outerHeight()
    // });

    $.scrollify({
        section: ".section",
        easing: "easeOutExpo",
        interstitialSection: ".footer",
        scrollSpeed: 1000,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () {},
        after: function () {},
        afterResize: function () {},
        afterRender: function () {},
    });

    currentYear = new Date().getFullYear();
    $(".current-year").text(currentYear);
});
