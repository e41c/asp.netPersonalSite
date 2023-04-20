$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(window).scroll(function () {
    // Change the navigation bar background color on scroll
    var nav = $("nav");
    if ($(this).scrollTop() > nav.height()) {
        nav.addClass("scrolled");
    } else {
        nav.removeClass("scrolled");
    }
});
