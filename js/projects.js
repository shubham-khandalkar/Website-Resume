var pro_detail={
	'jems': {'name': 'JEMS Fees Managment System', 
			 'technology': 'C# .NET',
			 'domain': 'Fees Management System',
			 'detail': 'JEMS Fees Management System is a custom made Windows Destop Application for JEMS School',
			 'images': ['media/images/admission.png', 'media/images/fees.png', 'media/images/report1.png'],
			 'link': '#'
			 }
}


$(".close").click(function(){
    $(".modal-wrap").removeClass("visible");});
$(".ma").click(function(){
    $(".modal-wrap").removeClass("visible");});
$(".card").click(function(){
	
	var slides = [];
	details = pro_detail[this.id];
	console.log(this.id);
	if(this.id == "jems")
	{
		console.log('inside');
		$("#carousel").empty();
		for(var i = 0; i < details['images'].length; i++)
		{
			$("#carousel").append('<div class="slide" style="width: 700px; background: url(' + "'" + details['images'][i] + "'" + ') center center / cover;"></div>')
			console.log('looping');
		}
		$("#project-title").text(details['name']);
		$("#project-tag").text(details['domain']);
		$("#project-detail").text(details['detail']);
		$("#project-link").attr('href', details['link']);
	}
	$(".modal-wrap").addClass("visible");});
var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }
function shiftSlide(direction) {
if (carousel.hasClass('transition')) return;
dragEnd = dragStart;
$(document).off('mouseup');
carousel
  .off('mousemove')
  .addClass('transition')
  .css('transform', 'translateX(' + direction * slideWidth + 'px)');
setTimeout(function() {
  if (direction === 1) {
	$('.slide:first').before($('.slide:last'));
  } else if (direction === -1) {
	$('.slide:last').after($('.slide:first'));
  }
  carousel.removeClass('transition');
  carousel.css('transform', 'translateX(0px)');
}, 700);
}
