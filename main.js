
$(document).ready(function () {
	$('.gnb').mouseenter(function(){
		$('.gnb_bar').addClass('on');
	});
	$('.gnb').mouseleave(function(){
		$('.gnb_bar').removeClass('on');
	});
	$('.gnb_bar').mouseenter(function(){
		$(this).addClass('on');
	});
	$('.gnb_bar').mouseleave(function(){
		$(this).removeClass('on');
	});
  $('.page-container').fullpage({
	anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage' ],
    navigation: false,
	menu: '#navi',
    navigationPosition: 'right',

	
	afterRender: function(){
		$('.vis_slider').slick({
			dots:true,
			fade:true,
			arrows: false,
			autoplay:true,
			autoplay: true,
			autoplaySpeed: 2000,
			appendDots: $('.dots_list'), //커스터마이징 닷
			customPaging: function(slider, i) { 
				console.log($(slider.$slides[i]).html());
				return '<button class="tab">' +  $(slider.$slides[i]).find('.vis_slide').attr('data-dot-title') + '</button>';
			}
		 });
		$('.play').click(function(){
			$('.vis_slider').slick('slickPlay');
			$('.stop').addClass('on');
			$(this).removeClass('on');
		});

		$('.stop').click(function(){
			$('.vis_slider').slick('slickPause');
			$(this).removeClass('on');
			$('.play').addClass('on');
		});
				
	   },
		afterLoad: function(anchor, index){
		if($('#section1').hasClass('active')){
			$('#navi div a i').addClass('white');
			$('#navi div a i').removeClass('grey');
		}else if ($('#section2').hasClass('active')){
			$('#navi div a i').addClass('grey');
			$('#navi div a i').removeClass('white');
		}
	   }
	});
});
$(function() {
    $('.sec2_slider').on('init', function(event, slick) {
      $('.counter').append('<div class="slick-counter"><span class="current"></span><em>/</em> <span class="total"></span></div>');
      $('.current').text(slick.currentSlide + 1);
      $('.total').text(slick.slideCount);
    })
    .slick({
      infinite: true,
	  arrows: true,
	  fade:true,
	  prevArrow: $('.prev02'),
	  nextArrow: $('.next02'),
	  dots: false,
	  asNavFor:$('.img_slider')
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
    });
	$('.img_slider').slick({
		fade:true,
		dots:false,
		arrows: false,
		asNavFor:$('.sec2_slider')
	});
  });
//# sourceURL=pen.js
