$(document).ready(function () {
    
    // form-reg
    (function() {
        var ww = $(window).width();

        if (ww < 1024) {
            $('.form-reg__item').find('.button').removeAttr('disabled');
        }

        if (ww < 981) {
            $('.form-reg__item').addClass('focus');
        }

        $('.form-reg__item').click(function () {

            if (ww > 980) {
                var block = $(this);

                $('.form-reg__item').removeClass('focus');
                block.addClass('focus');

                $('.form-reg__item').find('.button').attr('disabled','disabled');
                block.find('.button').removeAttr('disabled');
            
                if ($(this).find('.form-reg__thank').css('display') == 'block') { 
                     $('.form-reg__item').removeClass('focus');
                        $('.form-reg__item:first-child').addClass('focus');
                }
            } else {
                $('.form-reg__item').addClass('focus');
            }
        });

        $('.form-reg__thank--close').click(function () {
            $(this).parent().css({'display': 'none'});
            $(this).parent().hide();
            $(this).parent().parent().find('.form-reg__inner').fadeIn('show');
            $(this).parent().parent().removeClass('open');

            if (ww < 1024) {
                $(this).parent().css({'display': 'none'});
                $(this).find('.form-reg__thank').hide();
            }
        });
        
        $('#button1, #button2').submit(function (e) {

            if ($(this).find('.input--number').val() == '') {
                $(this).find('.error').fadeIn('show');
            } else {
                $(this).find('.form-reg__inner').hide();
                $(this).find('.form-reg__thank').css({'display': 'block'});

                if (ww < 981) {
                    $(this).find('.form-reg__thank').css({'display': 'none'});
                    $(this).find('.form-reg__inner').css({'display': 'block'});
                }
            }

            if ($(this).attr('id') == 'button2') {
                if (ww > 980) {
                    $('.form-reg__item').removeClass('focus');
                    $('.form-reg__item:first-child').addClass('focus');
                } else {
                    $(this).css({'display': 'none'});
                    
                    var part_top = $('#button1').offset().top;
                    $('html, body').animate({scrollTop: part_top + 'px'}, 0);
                }
            }

            e.preventDefault();
        });

        $('.link--scroll').click(function (e) {

            var target = $(this).attr('href');
            var target = $(this).attr('href').replace(/.+#/g, '');
            var target2 = target;

            var part_top = $(target2).offset().top;

            $('html, body').animate({scrollTop: part_top + 'px'}, 500);

            e.preventDefault();
        });

    })();

    

    // page-anketa

    (function() {

        var adressTags = [
            'Могота',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Москва',
            'Moskow'
        ];

        $('#form__anketa').submit(function (e) {
            $(this).find('.error').fadeIn('show');
            e.preventDefault();
        });

        $( "#input__adress__block" ).autocomplete({
            source: adressTags,
            appendTo: '.search__res',
            minLength: 1,
            open: function( event, ui ) {
                $('.search__wrapper').show();
            },
            close: function( event, ui ) {
                $('.search__wrapper').hide();
            },
            select: function( event, ui ) {
                $('.input__adress__block.input__phone-anketa').parent().addClass('close');
            }
        });

    })();
});