$(document).ready(function () {
    $('.sidenav-trigger').click(function (e) {
        $(this).attr("data-open", "1");
        $(".sidebar").css("-webkit-transform", "translateX(0%)");
        $(".sidebar").css("transform", "translateX(0%)");
        e.preventDefault();
        return false;
    });

    $('a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).attr("target", "_blank");
        }
    });

    $(document).on('click', function (e) {
        var dataOpen = $('.sidenav-trigger').attr("data-open");
        if (dataOpen && dataOpen.length > 0) {
            if (!$(e.target).hasClass("sidebar") && $(e.target).parents('.sidebar').length === 0) {
                $('.sidenav-trigger').attr("data-open", "");
                $(".sidebar").css("-webkit-transform", "translateX(-105%)");
                $(".sidebar").css("transform", "translateX(-105%)");
            }
        }
    });

    // only load high quality background image if root
    if (location.pathname === "/") {
        setTimeout(function () {
            if ($(".sidebar").css("padding-left") != "14px") {
                // not small screen
                var img = new Image();
                var el = $("#newim");
                img.src = "/images/bg.jpg";
                img.onload = function () {
                    el.css("opacity", "0");
                    el.css('background-image', 'url(' + img.src + ')');
                    el.animate({opacity: 1}, 2000);
                };
            }
        }, 500);
    }

    if ($('#lightbox').length === 0) {
        $('body').append(`
      <div id="lightbox" class="lightbox">
        <div class="lightbox-content">
          <img id="lightbox-img" src="" alt="Fullscreen image">
          <span class="close-lightbox">&times;</span>
        </div>
      </div>
    `);
    }

    // When a work image is clicked
    $('.work img').on('click', function() {
        // Get the original image source (not the resized version)
        var imgSrc = $(this).attr('src');

        // Set the image in the lightbox
        $('#lightbox-img').attr('src', imgSrc);

        // Show the lightbox with a fade effect
        $('#lightbox').fadeIn(300);

        // Prevent scrolling of the body
        $('body').addClass('no-scroll');
    });

    // Close the lightbox when the X is clicked
    $('.close-lightbox').on('click', function() {
        $('#lightbox').fadeOut(300);
        $('body').removeClass('no-scroll');
    });

    // Close the lightbox when clicking outside the image
    $('#lightbox').on('click', function(e) {
        if ($(e.target).is('#lightbox')) {
            $('#lightbox').fadeOut(300);
            $('body').removeClass('no-scroll');
        }
    });

    // Close lightbox with escape key
    $(document).keyup(function(e) {
        if (e.key === "Escape" && $('#lightbox').is(':visible')) {
            $('#lightbox').fadeOut(300);
            $('body').removeClass('no-scroll');
        }
    });

    $('#lightbox, #lightbox-img, .lightbox-content, .close-lightbox').on('click', function() {
        $('#lightbox').fadeOut(300);
        $('body').removeClass('no-scroll');
    });
});