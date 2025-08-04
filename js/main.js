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
    
    
    // page-winners
    (function() {

     $('.find__phone').click(function () {
      $(this).parents('.page-winners__top--data').slideUp(300);
      $(this).parents('.page-winners__top').find('.page-winners__top--phone').slideDown(300);
     });

     $('.find__date').click(function () {
      $(this).parents('.page-winners__top--phone').slideUp(300);
      $(this).parents('.page-winners__top').find('.page-winners__top--data').slideDown(300);
     });

    })();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wX2Rvd24gPSAwO1xyXG5mdW5jdGlvbiBzY3JvbGwgKCkge1xyXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblx0dmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1x0XHRcclxuICAgIHZhciB3aW5kb3dTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgdmFyIHZoID0gJCgnLmZ1bGxib3gnKS5vdXRlckhlaWdodCgpICsgJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgaWYgKHdpbmRvd1Njcm9sbCA+ICQoJy5mdWxsYm94Jykub3V0ZXJIZWlnaHQoKSAvIDIpIHtcclxuICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKFwiZml4ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvd1Njcm9sbCA+PSB2aCkge1xyXG4gICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcyhcInNtYWxsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzbWFsbFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5hdHRyKCdjb250ZW50Jywnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcpO1xyXG4gICAgICAgIHZhciB3dyAgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICB2YXIgaGggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHByID0gKDEgLyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykudG9GaXhlZCgxKTtcclxuICAgIFxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDk4MSkge1xyXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLmF0dHIoJ2NvbnRlbnQnLCd3aWR0aD0zMjBweCwgdXNlci1zY2FsYWJsZT1ubycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJykuYXR0cignY29udGVudCcsJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHd3ICA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLmF0dHIoJ2NvbnRlbnQnLCd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyk7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDk4MSkge1xyXG4gICAgICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5hdHRyKCdjb250ZW50Jywnd2lkdGg9MzIwcHgsIHVzZXItc2NhbGFibGU9bm8nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJykuYXR0cignY29udGVudCcsJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgJCh3aW5kb3cpLmJpbmQoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5hdHRyKCdjb250ZW50Jywnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcpO1xyXG4gICAgICAgICAgICB2YXIgd3cgID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS53aWR0aCgpIDwgOTgxKSB7XHJcbiAgICAgICAgICAgICAgICAkKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLmF0dHIoJ2NvbnRlbnQnLCd3aWR0aD0zMjBweCwgdXNlci1zY2FsYWJsZT1ubycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5hdHRyKCdjb250ZW50Jywnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIH0pKCk7XHJcblxyXG4gICAgdmFyIHNsaWRlciA9ICQoJy5qcy1zbGlkZXInKTtcclxuXHJcbiAgICAkKCcuanMtZWxlbS1pbmZvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGluZm8gPSAkKHRoaXMpO1xyXG4gICAgICAgIGluZm8ucGFyZW50KCkuZmluZCgnLmVsZW0taW5mb19fZGV0YWlsJykuZmFkZUluKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtaW5mb19fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY2xvc2UgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBjbG9zZS5wYXJlbnRzKCcuZWxlbS1pbmZvX19kZXRhaWwnKS5mYWRlT3V0KCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fbW9iaWxlXCIpO1xyXG5cclxuXHRmb3IgKHZhciBpID0gdG9nZ2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cdFx0dmFyIHRvZ2dsZSA9IHRvZ2dsZXNbaV07XHJcblx0XHR0b2dnbGVIYW5kbGVyKHRvZ2dsZSk7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gdG9nZ2xlSGFuZGxlcih0b2dnbGUpIHtcclxuXHRcdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1hY3RpdmVcIikgPT09IHRydWUpID8gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpIDogdGhpcy5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQkKCcubWVudV9fbW9iaWxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCgnLm1lbnUtbGlzdCcpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuXHRcdFx0JCgnLm1lbnUtbGlzdCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcubWVudS1saXN0JykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuXHRcdH1cclxuXHR9KTtcclxuICAgIFxyXG4gICAgJCgnLmpzLXNsaWRlci0tcHJpemUnKS5zbGljayh7IFxyXG4gICAgXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1hbHRcIj48c3ZnIGlkPVwiYXJyb3ctcHJpemUtbGVmdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjU0XCIgaGVpZ2h0PVwiNTRcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgY2xhc3M9XCJlbGVtLXN2Z1wiPjxjaXJjbGUgY2xhc3M9XCJlbGVtLXN2Zy0td2hpdGUgZWxlbS1zdmctLW9wYWNpdHlcIiBjeD1cIjI3XCIgY3k9XCIyN1wiIHI9XCIyN1wiLz48cGF0aCBpZD1cIlJvdW5kZWRfUmVjdGFuZ2xlXzU1NVwiIGRhdGEtbmFtZT1cIlJvdW5kZWQgUmVjdGFuZ2xlIDU1NVwiIGNsYXNzPVwiZWxlbS1zdmctLXdoaXRlXCIgZD1cIk01NjAuOTI1LDUxMi4xNjRMNTQ5LjU0NSw1MjMuNCw1NjAuOSw1MzQuNmExLjEwNiwxLjEwNiwwLDAsMSwwLDEuNTc2LDEuMTMzLDEuMTMzLDAsMCwxLTEuNTkxLDBMNTQ3LjM3MSw1MjQuNGExLjgwOCwxLjgwOCwwLDAsMS0uMDM0LTEuOTc4bDExLjk5Mi0xMS44MzRhMS4xMzUsMS4xMzUsMCwwLDEsMS42LDBBMS4xMTEsMS4xMTEsMCwwLDEsNTYwLjkyNSw1MTIuMTY0WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTI5IC00OTYpXCIvPjwvc3ZnPjxhPicsXHJcbiAgICAgICAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLXByZXYtLWFsdFwiPjxzdmcgaWQ9XCJhcnJvdy1wcml6ZS1yaWdodFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjU0XCIgaGVpZ2h0PVwiNTRcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgY2xhc3M9XCJlbGVtLXN2Z1wiPjxjaXJjbGUgY2xhc3M9XCJlbGVtLXN2Zy0td2hpdGUgZWxlbS1zdmctLW9wYWNpdHlcIiBjeD1cIjI3XCIgY3k9XCIyN1wiIHI9XCIyN1wiLz48cGF0aCBpZD1cIlJvdW5kZWRfUmVjdGFuZ2xlXzU1NVwiIGRhdGEtbmFtZT1cIlJvdW5kZWRcIiBjbGFzcz1cImVsZW0tc3ZnLS13aGl0ZVwiIGQ9XCJNMTM3Ny42Niw1MjMuNTgybC0xMS45OSwxMS44MzRhMS4xMjgsMS4xMjgsMCwwLDEtMS41OSwwLDEuMSwxLjEsMCwwLDEsMC0xLjU4MWwxMS4zOC0xMS4yM0wxMzY0LjEsNTExLjRhMS4xMDYsMS4xMDYsMCwwLDEsMC0xLjU3NiwxLjEzMiwxLjEzMiwwLDAsMSwxLjU5LDBsMTEuOTQsMTEuNzgzQTEuNzg4LDEuNzg4LDAsMCwxLDEzNzcuNjYsNTIzLjU4MlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzNDIgLTQ5NilcIi8+PC9zdmc+PGE+JyxcclxuICAgICAgICBkb3RzOnRydWVcclxuICAgIH0pLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKXtcclxuICAgICAgICB2YXIgc2xpZGVyID0gJCgnLmpzLXNsaWRlci0tcHJpemUnKTtcclxuICAgICAgICB2YXIgbnVtID0gbmV4dFNsaWRlICsgMTtcclxuICAgICAgICB2YXIgc2xpZGUgPSBzbGlkZXIuZmluZCgnLnNsaWRlci0tcHJpemVfX2l0ZW0nKS5lcShudW0pO1xyXG4gICAgICAgIHZhciBjb2xvciA9IHNsaWRlLmF0dHIoJ2RhdGEtYmcnKTtcclxuXHJcbiAgICAgICAgc2xpZGUucGFyZW50cygnLnBhZ2UtcHJpemVfX3NsaWRlcicpLnJlbW92ZUNsYXNzKCdibHVlIG9yYW5nZSBncmVlbicpO1xyXG4gICAgICAgIHNsaWRlLnBhcmVudHMoJy5wYWdlLXByaXplX19zbGlkZXInKS5hZGRDbGFzcyhjb2xvcik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgJCgnLmpzLXNsaWRlci0tcHJpemUtZ2VuJykuc2xpY2soeyBcclxuICAgIFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMTAsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLXByZXYtLWFsdFwiPjxzdmcgaWQ9XCJhcnJvdy1wcml6ZS1sZWZ0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCI1NFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiBjbGFzcz1cImVsZW0tc3ZnXCI+PGNpcmNsZSBjbGFzcz1cImVsZW0tc3ZnLS13aGl0ZSBlbGVtLXN2Zy0tb3BhY2l0eVwiIGN4PVwiMjdcIiBjeT1cIjI3XCIgcj1cIjI3XCIvPjxwYXRoIGlkPVwiUm91bmRlZF9SZWN0YW5nbGVfNTU1XCIgZGF0YS1uYW1lPVwiUm91bmRlZCBSZWN0YW5nbGUgNTU1XCIgY2xhc3M9XCJlbGVtLXN2Zy0td2hpdGVcIiBkPVwiTTU2MC45MjUsNTEyLjE2NEw1NDkuNTQ1LDUyMy40LDU2MC45LDUzNC42YTEuMTA2LDEuMTA2LDAsMCwxLDAsMS41NzYsMS4xMzMsMS4xMzMsMCwwLDEtMS41OTEsMEw1NDcuMzcxLDUyNC40YTEuODA4LDEuODA4LDAsMCwxLS4wMzQtMS45NzhsMTEuOTkyLTExLjgzNGExLjEzNSwxLjEzNSwwLDAsMSwxLjYsMEExLjExMSwxLjExMSwwLDAsMSw1NjAuOTI1LDUxMi4xNjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MjkgLTQ5NilcIi8+PC9zdmc+PGE+JyxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stcHJldi0tYWx0XCI+PHN2ZyBpZD1cImFycm93LXByaXplLXJpZ2h0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCI1NFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiBjbGFzcz1cImVsZW0tc3ZnXCI+PGNpcmNsZSBjbGFzcz1cImVsZW0tc3ZnLS13aGl0ZSBlbGVtLXN2Zy0tb3BhY2l0eVwiIGN4PVwiMjdcIiBjeT1cIjI3XCIgcj1cIjI3XCIvPjxwYXRoIGlkPVwiUm91bmRlZF9SZWN0YW5nbGVfNTU1XCIgZGF0YS1uYW1lPVwiUm91bmRlZFwiIGNsYXNzPVwiZWxlbS1zdmctLXdoaXRlXCIgZD1cIk0xMzc3LjY2LDUyMy41ODJsLTExLjk5LDExLjgzNGExLjEyOCwxLjEyOCwwLDAsMS0xLjU5LDAsMS4xLDEuMSwwLDAsMSwwLTEuNTgxbDExLjM4LTExLjIzTDEzNjQuMSw1MTEuNGExLjEwNiwxLjEwNiwwLDAsMSwwLTEuNTc2LDEuMTMyLDEuMTMyLDAsMCwxLDEuNTksMGwxMS45NCwxMS43ODNBMS43ODgsMS43ODgsMCwwLDEsMTM3Ny42Niw1MjMuNTgyWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTM0MiAtNDk2KVwiLz48L3N2Zz48YT4nLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODEsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogOFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTgxLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWRlci5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc2xpZGVyID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgc2xpZGVyLnNsaWNrKHtcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLXByZXZcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyLjk2OVwiIGhlaWdodD1cIjIzXCIgdmlld0JveD1cIjAgMCAxMi45NjkgMjNcIiBjbGFzcz1cImVsZW0tc3ZnXCI+PHBhdGggaWQ9XCJSb3VuZGVkX1JlY3RhbmdsZV8xNVwiIGRhdGEtbmFtZT1cIlJvdW5kZWQgUmVjdGFuZ2xlIDE1XCIgY2xhc3M9XCJlbGVtLXN2Zy0tYmx1ZVwiIGQ9XCJNMzg1LjQ5MSwxMzc1LjY0bC04Ljk4Niw4LjgzLDkuMDE4LDguODdhMS41MywxLjUzLDAsMCwxLDAsMi4xOSwxLjU4NiwxLjU4NiwwLDAsMS0yLjIyOSwwbC05LjgzMy05LjY2YTIuNiwyLjYsMCwwLDEsMC0yLjc4bDkuODA4LTkuNjRhMS42LDEuNiwwLDAsMSwyLjIyMywwQTEuNTMyLDEuNTMyLDAsMCwxLDM4NS40OTEsMTM3NS42NFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM3My4wMzEgLTEzNzMpXCIvPjwvc3ZnPjwvYT4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHRcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyLjkzOFwiIGhlaWdodD1cIjIzXCIgdmlld0JveD1cIjAgMCAxMi45MzggMjNcIiBjbGFzcz1cImVsZW0tc3ZnXCI+PHBhdGggaWQ9XCJSb3VuZGVkX1JlY3RhbmdsZV8xNVwiIGRhdGEtbmFtZT1cIlJvdW5kZWQgUmVjdGFuZ2xlIDE1XCIgY2xhc3M9XCJlbGVtLXN2Zy0tYmx1ZVwiIGQ9XCJNNzY2Ljk0MywxMzg0LjUyYTEuNTEyLDEuNTEyLDAsMCwxLS40LDEuMzlsLTkuODA4LDkuNjRhMS42LDEuNiwwLDAsMS0yLjIyMywwLDEuNTMyLDEuNTMyLDAsMCwxLDAtMi4xOWw4Ljk4Ni04LjgzLTkuMDE4LTguODdhMS41MywxLjUzLDAsMCwxLDAtMi4xOSwxLjU4NiwxLjU4NiwwLDAsMSwyLjIyOSwwbDkuODMzLDkuNjZBMS41MTMsMS41MTMsMCwwLDEsNzY2Ljk0MywxMzg0LjUyWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNzU0LjAzMSAtMTM3My4wMylcIi8+PC9zdmc+PC9hPidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJwYWdpbmF0b3JcIj4nKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcGFnaW5hdG9yID0gc2xpZGVyLmZpbmQoJy5wYWdpbmF0b3InKTtcclxuICAgICAgICBwYWdpbmF0b3IuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImN1cnJlbnRcIj4nKTtcclxuICAgICAgICBwYWdpbmF0b3IuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvdW50LW9mLXNsaWRlc1wiPicpO1xyXG5cclxuICAgICAgICB2YXIgY291bnQgPSBzbGlkZXIuZmluZCgnLmNvdW50LW9mLXNsaWRlcycpO1xyXG4gICAgICAgIGNvdW50Lmh0bWwoICcvICcgKyBzbGlkZXIuc2xpY2soXCJnZXRTbGlja1wiKS5zbGlkZUNvdW50KTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBzbGlkZXIuZmluZCgnLmN1cnJlbnQnKTtcclxuICAgICAgICBjdXJyZW50Lmh0bWwoJzEnKTtcclxuICAgICAgICBcclxuICAgICAgICBzbGlkZXIub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnQuaHRtbChjdXJyZW50U2xpZGUgKyAxKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLmlucHV0LS1kYXRlJykubWFzayhcIjk5Ljk5Ljk5OTlcIik7XHJcbiAgICAkKCdpbnB1dCwgc2VsZWN0Jykuc3R5bGVyKCk7XHJcblxyXG4gICAgJCgnLmpzLWdlbi1pbWcnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaW1nID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgbnVtID0gaW1nLmluZGV4O1xyXG4gICAgICAgIHZhciByb3cgPSBpbWcucGFyZW50KCk7XHJcblxyXG4gICAgICAgIHJvdy5wYXJlbnQoKS5maW5kKCcuanMtZ2VuLWltZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBpbWcuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmpzLWNob3NlLWltZycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBnZW4gPSAkKCcucGFnZS1wcml6ZS1nZW5fX2dlbmVyYXRvcicpO1xyXG4gICAgICAgIHZhciBnZXRfdG90YWwgPSAkKCcucGFnZS1wcml6ZS1nZW5fX3JlcycpO1xyXG4gICAgICAgIHZhciBpbWcgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciB1cmwgPSBpbWcuZmluZCgnaW1nJykuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIGlmIChnZW4uZmluZCgnLmFjdGl2ZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgaW1nX25ldyA9IGdlbi5maW5kKCcuYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHZhciBpbWdfbmV3X2luZGV4ID0gaW1nX25ldy5pbmRleCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHZhciByb3cgPSBpbWdfbmV3LnBhcmVudCgpO1xyXG4gICAgICAgICAgICB2YXIgcm93X251bSA9IHJvdy5pbmRleCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltZ19uZXcuZmluZCgnaW1nJykuYXR0cignc3JjJywgdXJsKTtcclxuICAgICAgICAgICAgZ2V0X3RvdGFsLmZpbmQoJy5nZW5lcmF0b3Itcm93JykuZXEocm93X251bSkuZmluZCgnLnBhZ2UtcHJpemUtZ2VuX19pdGVtJykuZXEoaW1nX25ld19pbmRleCkuZmluZCgnaW1nJykuYXR0cignc3JjJywgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gcGFnZS1jaGVja1xyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuanEtZmlsZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3dyA8IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJ9Cd0LDQttC80LjRgtC1LCA8YnI+0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDRhNCw0LnQuyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykuZmluZCgnaW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5qcS1maWxlX19uYW1lJykuaHRtbCh0ZXh0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2Zvcm1fX2NoZWNrJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmVycm9yJykuZmFkZUluKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIHF1ZXN0aW9uXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5xdWVzdGlvbl9fdGl0bGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZmluZCgnLnF1ZXN0aW9uX19pbmZvJykuc2xpZGVVcCgnMzAwJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJy5xdWVzdGlvbl9faW5mbycpLnNsaWRlRG93bignMzAwJyk7XHRcdFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRDbGFzcygnb3BlbicpO1x0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gcXVlc3Rpb24tZm9ybVxyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcjZm9ybV9fZmFxJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLmZpbmQoJy5pbnB1dC0tZW1haWwnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuZXJyb3InKS5mYWRlSW4oJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5xdWVzdGlvbi1mb3JtJykuZmluZCgnLnF1ZXN0aW9uLWZvcm1fX2lubmVyJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLnF1ZXN0aW9uLWZvcm0nKS5maW5kKCcucXVlc3Rpb24tZm9ybV9fdGhhbmsnKS5mYWRlSW4oJ3Nob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gcGFnZS1jb2RlXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnI2Zvcm1fX2NvZGUnKS5zdWJtaXQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9ICQodGhpcykuZmluZCgnLmlucHV0LS1jb2RlcycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5lcnJvcicpLmZhZGVJbignc2hvdycpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKHd3IDwgOTgxKSB7XHJcbiAgICAgICAgICAgICQoJy5qcy1jb2RlLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stYXJyb3cgc2xpY2stcHJldiBzbGljay1wcmV2LS1hbHRcIj48c3ZnIGlkPVwiYXJyb3ctcHJpemUtbGVmdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjU0XCIgaGVpZ2h0PVwiNTRcIiB2aWV3Qm94PVwiMCAwIDU0IDU0XCIgY2xhc3M9XCJlbGVtLXN2Z1wiPjxjaXJjbGUgY2xhc3M9XCJlbGVtLXN2Zy0td2hpdGUgZWxlbS1zdmctLW9wYWNpdHlcIiBjeD1cIjI3XCIgY3k9XCIyN1wiIHI9XCIyN1wiLz48cGF0aCBpZD1cIlJvdW5kZWRfUmVjdGFuZ2xlXzU1NVwiIGRhdGEtbmFtZT1cIlJvdW5kZWQgUmVjdGFuZ2xlIDU1NVwiIGNsYXNzPVwiZWxlbS1zdmctLXdoaXRlXCIgZD1cIk01NjAuOTI1LDUxMi4xNjRMNTQ5LjU0NSw1MjMuNCw1NjAuOSw1MzQuNmExLjEwNiwxLjEwNiwwLDAsMSwwLDEuNTc2LDEuMTMzLDEuMTMzLDAsMCwxLTEuNTkxLDBMNTQ3LjM3MSw1MjQuNGExLjgwOCwxLjgwOCwwLDAsMS0uMDM0LTEuOTc4bDExLjk5Mi0xMS44MzRhMS4xMzUsMS4xMzUsMCwwLDEsMS42LDBBMS4xMTEsMS4xMTEsMCwwLDEsNTYwLjkyNSw1MTIuMTY0WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTI5IC00OTYpXCIvPjwvc3ZnPjxhPicsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLWFycm93IHNsaWNrLW5leHQgc2xpY2stcHJldi0tYWx0XCI+PHN2ZyBpZD1cImFycm93LXByaXplLXJpZ2h0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCI1NFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiBjbGFzcz1cImVsZW0tc3ZnXCI+PGNpcmNsZSBjbGFzcz1cImVsZW0tc3ZnLS13aGl0ZSBlbGVtLXN2Zy0tb3BhY2l0eVwiIGN4PVwiMjdcIiBjeT1cIjI3XCIgcj1cIjI3XCIvPjxwYXRoIGlkPVwiUm91bmRlZF9SZWN0YW5nbGVfNTU1XCIgZGF0YS1uYW1lPVwiUm91bmRlZFwiIGNsYXNzPVwiZWxlbS1zdmctLXdoaXRlXCIgZD1cIk0xMzc3LjY2LDUyMy41ODJsLTExLjk5LDExLjgzNGExLjEyOCwxLjEyOCwwLDAsMS0xLjU5LDAsMS4xLDEuMSwwLDAsMSwwLTEuNTgxbDExLjM4LTExLjIzTDEzNjQuMSw1MTEuNGExLjEwNiwxLjEwNiwwLDAsMSwwLTEuNTc2LDEuMTMyLDEuMTMyLDAsMCwxLDEuNTksMGwxMS45NCwxMS43ODNBMS43ODgsMS43ODgsMCwwLDEsMTM3Ny42Niw1MjMuNTgyWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTM0MiAtNDk2KVwiLz48L3N2Zz48YT4nLFxyXG4gICAgICAgICAgICAgICAgZG90czp0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcuanMtY29kZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5qcy1jb2RlLXNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkoKTtcclxuICAgIFxyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlcyhudW0pIHtcclxuICAgICAgICB2YXIgYW5pbWF0ZSA9ICQoJy5qcy1hbmltYXRlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYW5pbWF0ZS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBhbmltYXRlLmNoaWxkcmVuKCkuZXEobnVtKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgXHJcbiAgICBpZiAod3cgPiA5ODApIHtcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0ZXMoaSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgIGlmIChpID4gMykge1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICQoJy5kb3duJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdocmVmJykucmVwbGFjZSgvLisjL2csICcnKTtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgPT0gJyNzZWN0aW9uLW9mZmVyJykge1xyXG4gICAgICAgdmFyIHBhcnRfdG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgIHZhciBwYXJ0X3RvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhcnRfdG9wICsgJ3B4J30sIDUwMCk7XHJcblxyXG4gICAgICBzY3JvbGwoKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBwYWdlLXdpbm5lcnNcclxuICAgIChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgJCgnLmZpbmRfX3Bob25lJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5wYWdlLXdpbm5lcnNfX3RvcC0tZGF0YScpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcucGFnZS13aW5uZXJzX190b3AnKS5maW5kKCcucGFnZS13aW5uZXJzX190b3AtLXBob25lJykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICAgICQoJy5maW5kX19kYXRlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5wYWdlLXdpbm5lcnNfX3RvcC0tcGhvbmUnKS5zbGlkZVVwKDMwMCk7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnLnBhZ2Utd2lubmVyc19fdG9wJykuZmluZCgnLnBhZ2Utd2lubmVyc19fdG9wLS1kYXRhJykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICBzY3JvbGwoKTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuXHRcdHNjcm9sbCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAod3cgPCA5ODEpIHtcclxuICAgICAgICAgICAgJCgnLmpzLWNvZGUtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1hcnJvdyBzbGljay1wcmV2IHNsaWNrLXByZXYtLWFsdFwiPjxzdmcgaWQ9XCJhcnJvdy1wcml6ZS1sZWZ0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCI1NFwiIHZpZXdCb3g9XCIwIDAgNTQgNTRcIiBjbGFzcz1cImVsZW0tc3ZnXCI+PGNpcmNsZSBjbGFzcz1cImVsZW0tc3ZnLS13aGl0ZSBlbGVtLXN2Zy0tb3BhY2l0eVwiIGN4PVwiMjdcIiBjeT1cIjI3XCIgcj1cIjI3XCIvPjxwYXRoIGlkPVwiUm91bmRlZF9SZWN0YW5nbGVfNTU1XCIgZGF0YS1uYW1lPVwiUm91bmRlZCBSZWN0YW5nbGUgNTU1XCIgY2xhc3M9XCJlbGVtLXN2Zy0td2hpdGVcIiBkPVwiTTU2MC45MjUsNTEyLjE2NEw1NDkuNTQ1LDUyMy40LDU2MC45LDUzNC42YTEuMTA2LDEuMTA2LDAsMCwxLDAsMS41NzYsMS4xMzMsMS4xMzMsMCwwLDEtMS41OTEsMEw1NDcuMzcxLDUyNC40YTEuODA4LDEuODA4LDAsMCwxLS4wMzQtMS45NzhsMTEuOTkyLTExLjgzNGExLjEzNSwxLjEzNSwwLDAsMSwxLjYsMEExLjExMSwxLjExMSwwLDAsMSw1NjAuOTI1LDUxMi4xNjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MjkgLTQ5NilcIi8+PC9zdmc+PGE+JyxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stYXJyb3cgc2xpY2stbmV4dCBzbGljay1wcmV2LS1hbHRcIj48c3ZnIGlkPVwiYXJyb3ctcHJpemUtcmlnaHRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI1NFwiIGhlaWdodD1cIjU0XCIgdmlld0JveD1cIjAgMCA1NCA1NFwiIGNsYXNzPVwiZWxlbS1zdmdcIj48Y2lyY2xlIGNsYXNzPVwiZWxlbS1zdmctLXdoaXRlIGVsZW0tc3ZnLS1vcGFjaXR5XCIgY3g9XCIyN1wiIGN5PVwiMjdcIiByPVwiMjdcIi8+PHBhdGggaWQ9XCJSb3VuZGVkX1JlY3RhbmdsZV81NTVcIiBkYXRhLW5hbWU9XCJSb3VuZGVkXCIgY2xhc3M9XCJlbGVtLXN2Zy0td2hpdGVcIiBkPVwiTTEzNzcuNjYsNTIzLjU4MmwtMTEuOTksMTEuODM0YTEuMTI4LDEuMTI4LDAsMCwxLTEuNTksMCwxLjEsMS4xLDAsMCwxLDAtMS41ODFsMTEuMzgtMTEuMjNMMTM2NC4xLDUxMS40YTEuMTA2LDEuMTA2LDAsMCwxLDAtMS41NzYsMS4xMzIsMS4xMzIsMCwwLDEsMS41OSwwbDExLjk0LDExLjc4M0ExLjc4OCwxLjc4OCwwLDAsMSwxMzc3LjY2LDUyMy41ODJaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzQyIC00OTYpXCIvPjwvc3ZnPjxhPicsXHJcbiAgICAgICAgICAgICAgICBkb3RzOnRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCQoJy5qcy1jb2RlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLWNvZGUtc2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlcyhpKTtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH1cclxuXHR9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
