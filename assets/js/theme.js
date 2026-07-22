(function ($) {
    'use strict';


    //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
    

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

// :: Hero Home one Slides
    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.hero-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            dots: false,
            center: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
            
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    } 


// service Active
    $('.slider_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:2500,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })



// service Active
    $('.slid_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:2500,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

// service Active
    $('.aboutseven_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })


// service Active
    $('.sliders_lists').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:3000,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })



// service Active
    $('.horizontal_slid').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        dotsEach:true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })





// service Active
    $('.spilt_slid').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:3000,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })



// service Active
    $('.tag_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:2000,
        autoplayTimeout: 1000,
        dotsEach:true,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    })



// service Active
    $('.testi-list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1500,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: true,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })





// service Active
    $('.testimoni_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1500,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })



// service Active
    $('.testfive_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })



// service Active
    $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1500,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })




// service Active
    $('.details_list').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        smartSpeed:1000,
        autoplayTimeout: 5000,
        dotsEach:true,
        dots: false,
        nav: true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 5
            }
        }
    })


// service Active
    $('.testiseven_list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: false,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })



    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function () {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })


    jQuery(document).ready(function ($) {
        "use strict";

        // =======< accordion js >========
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $('.accordion a').on('click', function (j) {
            var dropDown = $(this).closest("li").find("p");

            $(this).closest(".accordion").find("p").not(dropDown).slideUp();

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });


        //=====< barfiller script >====
        $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });
        $('#bar3').barfiller({
            duration: 7000
        });


        //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });



    // <!--jave script -->

    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });


    $(".circle_percent").each(function () {
        var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.prop('Counter', 0).animate({
            Counter: $dataV
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now) + "%");
            }
        });
        if ($dataV >= 51) {
            $round.css("transform", "rotate(" + 360 + "deg)");
            setTimeout(function () {
                $this.addClass("percent_more");
            }, 1000);
            setTimeout(function () {
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            }, 1000);
        }
    });



 if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }




      "use strict";
    jQuery(document).ready(function (o) {
        0 < o(".offset-side-bar").length &&
            o(".offset-side-bar").on("click", function (e) {
                e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
            }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".cart-group").removeClass("isActive");
                }),
            0 < o(".navSidebar-button").length &&
                o(".navSidebar-button").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                }),
            0 < o(".close-side-widget").length &&
                o(".close-side-widget").on("click", function (e) {
                    e.preventDefault(), o(".info-group").removeClass("isActive");
                }),
            o("body").on("click", function (e) {
                o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
            }),
            o(".xs-sidebar-widget").on("click", function (e) {
                e.stopPropagation();
            }),
            0 < o(".xs-modal-popup").length &&
                o(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !2,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !2,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                        },
                    },
                });
    });



    //curseer animation

        var curser = document.querySelector(".curser");
        var curser2 = document.querySelector(".curser2");
    
        document.addEventListener("mousemove", function(e){
            curser.style.cssText = curser2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });
    


     /*  Cart Plus Minus Button
    /*----------------------------------------*/
    
    $('.ctnbutton').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    phoneInput.addEventListener("keypress", function (e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    });

    phoneInput.addEventListener("paste", function (e) {
        e.preventDefault();

        let paste = (e.clipboardData || window.clipboardData)
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 10);

        this.value = paste;
    });

    // ================================
// DREAMIT CONTACT FORM
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("dreamit-form");

    if (!form) return;

    const submitBtn = document.getElementById("submitBtn");

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Fake Mobile Numbers
    const fakeNumbers = [
        "0000000000",
        "1111111111",
        "2222222222",
        "3333333333",
        "4444444444",
        "5555555555",
        "6666666666",
        "7777777777",
        "8888888888",
        "9999999999",
        "9876543210",
        "1234567890"
    ];

    // Disposable Email Domains
    const blockedDomains = [
        "mailinator.com",
        "tempmail.com",
        "10minutemail.com",
        "guerrillamail.com",
        "trashmail.com",
        "yopmail.com",
        "temp-mail.org",
        "dispostable.com",
        "fakeinbox.com"
    ];

    function showError(input, msg) {
        alert(msg);
        input.focus();
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // NAME
        const nameRegex = /^[A-Za-z ]{3,50}$/;

        if (!nameRegex.test(name.value.trim())) {
            showError(name, "Please enter a valid name.");
            return;
        }

        // PHONE

        const phoneValue = phone.value.trim();

        if (!/^[6-9][0-9]{9}$/.test(phoneValue)) {
            showError(phone, "Enter a valid mobile number.");
            return;
        }

        if (fakeNumbers.includes(phoneValue)) {
            showError(phone, "Fake mobile numbers are not allowed.");
            return;
        }

        // EMAIL

        const emailValue = email.value.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            showError(email, "Enter a valid email address.");
            return;
        }

        const domain = emailValue.split("@")[1];

        if (blockedDomains.includes(domain)) {
            showError(email, "Temporary email addresses are not allowed.");
            return;
        }

        // MESSAGE

        if (message.value.trim().length < 10) {
            showError(message, "Please enter at least 10 characters.");
            return;
        }

        // Button Loader

        submitBtn.disabled = true;

        submitBtn.innerHTML =
            '<span class="spinner-border spinner-border-sm"></span> Sending...';

        // AJAX

        const formData = new FormData(form);

        fetch(form.action, {

            method: "POST",

            body: formData

        })

        .then(response => response.json())

        .then(data => {

            submitBtn.disabled = false;

            submitBtn.innerHTML = "SUBMIT NOW";

            if (data.status == "success") {

                form.reset();

                Swal.fire({

                    icon: "success",

                    title: "Thank You!",

                    text: data.message,

                    confirmButtonColor: "#000"

                });

            } else {

                Swal.fire({

                    icon: "error",

                    title: "Oops!",

                    text: data.message,

                    confirmButtonColor: "#000"

                });

            }

        })

        .catch(error => {

            submitBtn.disabled = false;

            submitBtn.innerHTML = "SUBMIT NOW";

            Swal.fire({

                icon: "error",

                title: "Server Error",

                text: "Please try again later."

            });

        });

    });

});


})(jQuery);