function my_code(){
  $(".first-circle").addClass('show-color');
}


$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;

   $("#progressbar").attr('value', position);

});






window.onload=my_code();
jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code

});
$("#portfolioTwo").hide();
 document.getElementById("secondcirle").addEventListener("mouseover",function(){
   var portfolioone = document.getElementById("portfolioOne");
   var portfolioTwo = document.getElementById("portfolioTwo");
if(portfolioTwo.style.display=="none"){
  portfolioone.style.display="none";

   $("#portfolioTwo").fadeIn(1000);

}else{
  portfolioone.style.display="none";
  $("#portfolioTwo").fadeIn(1000);
}


 });
 document.getElementById("firstcirle").addEventListener("mouseover",function(){
   var portfolioones = document.getElementById("portfolioOne");
   var portfolioTwos = document.getElementById("portfolioTwo");
 if(portfolioones.style.display=="none"){
  portfolioTwos.style.display="none";
$("#portfolioOne").fadeIn(1000);
}else{
  portfolioTwos.style.display="none";
 }
});

function turnRed(x)
{

$(".second-circle").addClass('show-color');
$(".first-circle").removeClass('show-color');
}

function turnBlue(x)
{
  $(".first-circle").addClass('show-color');
//firstcirle.style.color ="#ff0000";
  $(".second-circle").removeClass('show-color');
}

function turnGreen(x)
{
//firstcirle.style.color ="#808080";
}

// scroll


	var counter = function() {

		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});

			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

    // $(document).ready(function(){
    //
    // var navTop = $('#nav').offset().top;
    // var navHeight = $('#nav').height();
    // var windowH = $(window).height();
    //
    // $('.section').height(windowH);
    //
    // $(document).scroll(function(){
    // 	var st = $(this).scrollTop();
    //
    //     //for the nav bar:
    // 	if(st > navTop ){
    // 		$('#nav').addClass('fix');
    // 		$('.section:eq(0)').css({'margin-top':navHeight});//fix  scrolling issue due to the fix nav bar
    // 	}else{
    // 		$('#nav').removeClass('fix');
    // 		$('.section:eq(0)').css({'margin-top':'0'});
    // 	}
    //
    // 	$('.section').each(function(index, element) {
    // 		if(st + navHeight > $(this).offset().top && st + navHeight  <= $(this).offset().top + $(this).height()  ){
    // 			$(this).addClass('active');
    //
    //             var id = $(this).attr('id');
    //             $('a[href="#'+id+'"]').parent('li').addClass('active');
    // 			// or $('#nav li:eq('+index+')').addClass('active');
    // 		}else{
    // 			$(this).removeClass('active');
    //
    //             var id = $(this).attr('id');
    //             $('a[href="#'+id+'"]').parent('li').removeClass('active');
    // 			//or $('#nav li:eq('+index+')').removeClass('active');
    // 		}
    //
    // 	});
    //
    // });
    //
    // });
    $(function() {

    var $meters = $(".meter > span");
    var $section = $('#third');
    var $queue = $({});

    function loadDaBars() {
				$(".meter > span").each(function() {
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
							width: $(this).data("origWidth")
						}, 1200);
				});
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

});
$('#skills').waypoint(function(direction) {
    if (direction === 'down') {
        $('.progress-bar').width(function(){
            // this here refers to individual .progress-bar items
            return $(this).data('score');
        });
    } else {
        $('.progress-bar').width('score');
    }
}, { offset: '120%' });




(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;

    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');

    }
