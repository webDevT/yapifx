$(function(){



  $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });


$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
})

$('.menu-item').click(function(){
	$(this).toggleClass('active');
})


// $('.slider').slick({
// prevArrow: false,
// nextArrow: false,
// slidesToShow: 3,
// infinity: true,
// centerMode: true,
// centerPadding: '0px',
// responsive: [
// {
//     breakpoint: 992,
//     settings: {
//    		slidesToShow: 1,
//    		centerMode: false,
   
//     }
//   },
// ]
// });

var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '',
  nextArrow: '',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true, 
 responsive: [
{
    breakpoint: 992,
    settings: {
       slidesToShow: 1,
       centerMode: false,
   
    }
  },
],
  customPaging: function(slider, i) {
    return '';
  },

  /*infinite: false,*/
});


// start analis tabs
	$(".analis__tab").click(function() {
	$(".analis__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".analis__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//end analis tabs

// start analis tabs
	$(".analis__sub-tab--1").click(function() {
	$(".analis__sub-tab--1").removeClass("active").eq($(this).index()).addClass("active");
 	$(".analis__sub-tab-item--1").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".analis__sub-tab--2").click(function() {
	$(".analis__sub-tab--2").removeClass("active").eq($(this).index()).addClass("active");
 	$(".analis__sub-tab-item--2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".analis__sub-tab--3").click(function() {
	$(".analis__sub-tab--3").removeClass("active").eq($(this).index()).addClass("active");
 	$(".analis__sub-tab-item--3").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".analis__sub-tab--4").click(function() {
	$(".analis__sub-tab--4").removeClass("active").eq($(this).index()).addClass("active");
 	$(".analis__sub-tab-item--4").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".analis__sub-tab--5").click(function() {
	$(".analis__sub-tab--5").removeClass("active").eq($(this).index()).addClass("active");
 	$(".analis__sub-tab-item--5").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".partner__tab").click(function() {
	$(".partner__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".partner-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".tool__tab").click(function() {
	$(".tool__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tool__tabs-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
	
$('.faq__item-header').click(function(){
	$(this).parent().find('.faq__item-text').slideToggle();
	$(this).toggleClass('active');
})

// start learn forex tabs
	$(".learn-forex__tab").click(function() {
	$(".learn-forex__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".learn-forex__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//end learn forex tabs



	$(".btn").click(function() {
	$(".btn").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tool__tabs-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//end analis tabs

$('.open-popup-write').click(function(){
	$('.popup').fadeIn();
})
$('.popup__close').click(function(){
	$('.popup').fadeOut();
})
$('.popup__close').click(function(){
	$('.modal').fadeOut();
})
$('.open-modal').click(function(){
	$('.modal').fadeIn();
})

jQuery(function($){
   $.mask.definitions['9'] = '';
$.mask.definitions['X'] = '[0-9]';
$(".input-phone").mask("+90 (XXX) XX-XX-XX")
});
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('.input-phone').click(function(){
    $(this).setCursorPosition(5); 
  });



});
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".modal-content"); 
    var div2 = $(".modal");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.fadeOut();

    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".popup__content"); 
    var div2 = $(".popup");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.fadeOut();

    }
  });
});

