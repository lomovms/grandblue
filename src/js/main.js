'use strict';

var tempScrollTop, currentScrollTop, tempScrollTop_down = 0;
function scroll () {
    var ww = $(window).width();
	var vh = $(window).height();		
    var windowScroll = $(window).scrollTop();

    var vh = $('.fullbox').outerHeight() + $('.header').outerHeight();

    if (windowScroll > $('.fullbox').outerHeight() / 2) {
        $('.header').addClass("fixed");
    } else {
        $('.header').removeClass("fixed");
    }

    if (windowScroll >= vh) {
        $('.header').addClass("small");
    } else {
        $('.header').removeClass("small");
    }
}

$(document).ready(function () {

    (function() {

        $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
        var ww  = $(window).width();
        var hh = $(window).height();
        var pr = (1 / window.devicePixelRatio).toFixed(1);
    
        if ($(window).width() < 981) {
            $('meta[name="viewport"]').attr('content','width=320px, user-scalable=no');
        } else {
            $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
        }
    
        $(window).resize(function () {
            var ww  = $(window).width();
            $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
            if ($(window).width() < 981) {
                $('meta[name="viewport"]').attr('content','width=320px, user-scalable=no');
            } else {
                $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
            }
        });
    
        $(window).bind('orientationchange', function(event) {
            $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
            var ww  = $(window).width();
            if ($(document).width() < 981) {
                $('meta[name="viewport"]').attr('content','width=320px, user-scalable=no');
            } else {
                $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
            }
        });
    
    })();

    var slider = $('.js-slider');

    $('.js-elem-info').click(function() {
        var info = $(this);
        info.parent().find('.elem-info__detail').fadeIn('show');
    });

    $('.js-info__close').click(function() {
        var close = $(this);

        close.parents('.elem-info__detail').fadeOut('show');
    });

    var toggles = document.querySelectorAll(".menu__mobile");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		});
	}

	$('.menu__mobile').click(function() {
		if ($('.menu-list').hasClass('open')) {
			$('.menu-list').removeClass('open');
		} else {
			$('.menu-list').addClass('open');
		}
	});
    
    $('.js-slider--prize').slick({ 
    
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        prevArrow: '<a class="slick-prev slick-prev--alt"><svg id="arrow-prize-left" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded Rectangle 555" class="elem-svg--white" d="M560.925,512.164L549.545,523.4,560.9,534.6a1.106,1.106,0,0,1,0,1.576,1.133,1.133,0,0,1-1.591,0L547.371,524.4a1.808,1.808,0,0,1-.034-1.978l11.992-11.834a1.135,1.135,0,0,1,1.6,0A1.111,1.111,0,0,1,560.925,512.164Z" transform="translate(-529 -496)"/></svg><a>',
        nextArrow: '<a class="slick-next slick-prev--alt"><svg id="arrow-prize-right" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded" class="elem-svg--white" d="M1377.66,523.582l-11.99,11.834a1.128,1.128,0,0,1-1.59,0,1.1,1.1,0,0,1,0-1.581l11.38-11.23L1364.1,511.4a1.106,1.106,0,0,1,0-1.576,1.132,1.132,0,0,1,1.59,0l11.94,11.783A1.788,1.788,0,0,1,1377.66,523.582Z" transform="translate(-1342 -496)"/></svg><a>',
        dots:true
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var slider = $('.js-slider--prize');
        var num = nextSlide + 1;
        var slide = slider.find('.slider--prize__item').eq(num);
        var color = slide.attr('data-bg');

        slide.parents('.page-prize__slider').removeClass('blue orange green');
        slide.parents('.page-prize__slider').addClass(color);
    });
    
    
     $('.js-slider--prize-gen').slick({ 
    
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        cssEase: 'linear',
        prevArrow: '<a class="slick-prev slick-prev--alt"><svg id="arrow-prize-left" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded Rectangle 555" class="elem-svg--white" d="M560.925,512.164L549.545,523.4,560.9,534.6a1.106,1.106,0,0,1,0,1.576,1.133,1.133,0,0,1-1.591,0L547.371,524.4a1.808,1.808,0,0,1-.034-1.978l11.992-11.834a1.135,1.135,0,0,1,1.6,0A1.111,1.111,0,0,1,560.925,512.164Z" transform="translate(-529 -496)"/></svg><a>',
        nextArrow: '<a class="slick-next slick-prev--alt"><svg id="arrow-prize-right" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded" class="elem-svg--white" d="M1377.66,523.582l-11.99,11.834a1.128,1.128,0,0,1-1.59,0,1.1,1.1,0,0,1,0-1.581l11.38-11.23L1364.1,511.4a1.106,1.106,0,0,1,0-1.576,1.132,1.132,0,0,1,1.59,0l11.94,11.783A1.788,1.788,0,0,1,1377.66,523.582Z" transform="translate(-1342 -496)"/></svg><a>',
        responsive: [
            {
              breakpoint: 1281,
              settings: {
                slidesToShow: 8
              }
            },
            {
                breakpoint: 981,
                settings: {
                  slidesToShow: 1,
                  variableWidth: true,
                  arrows: false
                }
              }
        ]
    });

    slider.each(function() {

        var slider = $(this);

        slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<a class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="12.969" height="23" viewBox="0 0 12.969 23" class="elem-svg"><path id="Rounded_Rectangle_15" data-name="Rounded Rectangle 15" class="elem-svg--blue" d="M385.491,1375.64l-8.986,8.83,9.018,8.87a1.53,1.53,0,0,1,0,2.19,1.586,1.586,0,0,1-2.229,0l-9.833-9.66a2.6,2.6,0,0,1,0-2.78l9.808-9.64a1.6,1.6,0,0,1,2.223,0A1.532,1.532,0,0,1,385.491,1375.64Z" transform="translate(-373.031 -1373)"/></svg></a>',
            nextArrow: '<a class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="12.938" height="23" viewBox="0 0 12.938 23" class="elem-svg"><path id="Rounded_Rectangle_15" data-name="Rounded Rectangle 15" class="elem-svg--blue" d="M766.943,1384.52a1.512,1.512,0,0,1-.4,1.39l-9.808,9.64a1.6,1.6,0,0,1-2.223,0,1.532,1.532,0,0,1,0-2.19l8.986-8.83-9.018-8.87a1.53,1.53,0,0,1,0-2.19,1.586,1.586,0,0,1,2.229,0l9.833,9.66A1.513,1.513,0,0,1,766.943,1384.52Z" transform="translate(-754.031 -1373.03)"/></svg></a>'
        });

        slider.append('<span class="paginator">');
        
        var paginator = slider.find('.paginator');
        paginator.append('<span class="current">');
        paginator.append('<span class="count-of-slides">');

        var count = slider.find('.count-of-slides');
        count.html( '/ ' + slider.slick("getSlick").slideCount);

        var current = slider.find('.current');
        current.html('1');
        
        slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
            current.html(currentSlide + 1);
      });
    });
    
    $('.input--date').mask("99.99.9999");
    $('input, select').styler();

    $('.js-gen-img').click(function() {
        var img = $(this);
        var num = img.index;
        var row = img.parent();

        row.parent().find('.js-gen-img').removeClass('active');
        img.addClass('active');
    });

    $('.js-chose-img').click(function() {
        var gen = $('.page-prize-gen__generator');
        var get_total = $('.page-prize-gen__res');
        var img = $(this);
        var url = img.find('img').attr('src');

        if (gen.find('.active').length) {
            var img_new = gen.find('.active');
            var img_new_index = img_new.index();
    
            var row = img_new.parent();
            var row_num = row.index();
    
            img_new.find('img').attr('src', url);
            get_total.find('.generator-row').eq(row_num).find('.page-prize-gen__item').eq(img_new_index).find('img').attr('src', url);
        }
    });


    // page-check
    (function() {

        $('.jq-file').each(function () {
            var ww = $(window).width();

            if (ww < 1024) {
                var text = 'Нажмите, <br>чтобы выбрать файл';
            } else {
                var text = $(this).find('input').attr('placeholder');
            }

            $(this).find('.jq-file__name').html(text);
        });

        $('#form__check').submit(function (e) {
            $(this).find('.error').fadeIn('show');
            e.preventDefault();
        });

    })();

    // question
    (function() {

        $('.question__title').click(function () {
            var item = $(this).parent();
            
            if (item.hasClass('open')) {
                item.find('.question__info').slideUp('300');
                item.removeClass('open');
            } else {
                item.find('.question__info').slideDown('300');		
                item.addClass('open');	
            }
            
            
        });

    })();

    // question-form
    (function() {

        $('#form__faq').submit(function (e) {
            
            var input = $(this).find('.input--email');
            
            if (input.val() == '') {
                $(this).find('.error').fadeIn('show');
            } else {
                $('.question-form').find('.question-form__inner').hide();
                $('.question-form').find('.question-form__thank').fadeIn('show');
            }
            
            e.preventDefault();
        });

    })();

    // page-code
    (function() {
        
        $('#form__code').submit(function (e) {
            
            var input = $(this).find('.input--codes');
            
            if (input.val() == '') {
                $(this).find('.error').fadeIn('show');
            } 
            
            e.preventDefault();
        });

        var ww = $(window).width();

        if (ww < 981) {
            $('.js-code-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                prevArrow: '<a class="slick-arrow slick-prev slick-prev--alt"><svg id="arrow-prize-left" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded Rectangle 555" class="elem-svg--white" d="M560.925,512.164L549.545,523.4,560.9,534.6a1.106,1.106,0,0,1,0,1.576,1.133,1.133,0,0,1-1.591,0L547.371,524.4a1.808,1.808,0,0,1-.034-1.978l11.992-11.834a1.135,1.135,0,0,1,1.6,0A1.111,1.111,0,0,1,560.925,512.164Z" transform="translate(-529 -496)"/></svg><a>',
                nextArrow: '<a class="slick-arrow slick-next slick-prev--alt"><svg id="arrow-prize-right" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded" class="elem-svg--white" d="M1377.66,523.582l-11.99,11.834a1.128,1.128,0,0,1-1.59,0,1.1,1.1,0,0,1,0-1.581l11.38-11.23L1364.1,511.4a1.106,1.106,0,0,1,0-1.576,1.132,1.132,0,0,1,1.59,0l11.94,11.783A1.788,1.788,0,0,1,1377.66,523.582Z" transform="translate(-1342 -496)"/></svg><a>',
                dots:true
            });
        } else {
            if ($('.js-code-slider').length) {
                $('.js-code-slider').slick('unslick');
            }
        }

    })();
    
    var i = 0;
    
    function animates(num) {
        var animate = $('.js-animate');
        
        animate.children().removeClass('active');
        animate.children().eq(num).addClass('active');
    }
    
    var ww = $(window).width();
    
    if (ww > 980) {
        setInterval(function() {
        
            animates(i);
            i++;

            if (i > 3) {
                i = 0;
            }

        }, 2000);
    }
    
    $('.down').click(function (e) {
      var target = $(this).attr('href');
      var target = $(this).attr('href').replace(/.+#/g, '');

      if (target == '#section-offer') {
       var part_top = $(target).offset().top;
      } else {
       var part_top = $(target).offset().top;
      }

      $('html, body').animate({scrollTop: part_top + 'px'}, 500);

      scroll();

      e.preventDefault();
     });
    
    scroll();

    $(window).scroll(function () {
		scroll();
    });
    
    $(window).resize(function () {
        scroll();
        
        var ww = $(window).width();

        if (ww < 981) {
            $('.js-code-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                prevArrow: '<a class="slick-arrow slick-prev slick-prev--alt"><svg id="arrow-prize-left" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded Rectangle 555" class="elem-svg--white" d="M560.925,512.164L549.545,523.4,560.9,534.6a1.106,1.106,0,0,1,0,1.576,1.133,1.133,0,0,1-1.591,0L547.371,524.4a1.808,1.808,0,0,1-.034-1.978l11.992-11.834a1.135,1.135,0,0,1,1.6,0A1.111,1.111,0,0,1,560.925,512.164Z" transform="translate(-529 -496)"/></svg><a>',
                nextArrow: '<a class="slick-arrow slick-next slick-prev--alt"><svg id="arrow-prize-right" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" class="elem-svg"><circle class="elem-svg--white elem-svg--opacity" cx="27" cy="27" r="27"/><path id="Rounded_Rectangle_555" data-name="Rounded" class="elem-svg--white" d="M1377.66,523.582l-11.99,11.834a1.128,1.128,0,0,1-1.59,0,1.1,1.1,0,0,1,0-1.581l11.38-11.23L1364.1,511.4a1.106,1.106,0,0,1,0-1.576,1.132,1.132,0,0,1,1.59,0l11.94,11.783A1.788,1.788,0,0,1,1377.66,523.582Z" transform="translate(-1342 -496)"/></svg><a>',
                dots:true
            });
        } else {
            if ($('.js-code-slider').length) {
                $('.js-code-slider').slick('unslick');
            }
            
            setInterval(function() {
        
                animates(i);
                i++;

                if (i > 3) {
                    i = 0;
                }

            }, 2000);
        }
	});
});