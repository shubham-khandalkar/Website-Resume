
var windowWidth = $(window).width();

$("#nav-toggle").click(function() {
  $("#nav ul").slideToggle();
  $("#nav ul").toggleClass("open");
});

$(window).resize(function() {
  resetCanvas();
  windowWidth = $(window).width();
  if (windowWidth > 767) {
    if ($("#nav ul").is(":hidden")) {
      $("#nav ul").css("display", "block");
      $("#nav-toggle").css("display", "none");
      $("#nav ul").removeClass("open");
    }
  } else {
    $("#nav-toggle").css("display", "block");
    if (!$("#nav ul").hasClass("open")) $("#nav ul").css("display", "none");
  }
});

$(function() {
  var navPos = $(".nav-bar").position().top;
  var lastPos = 0;
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
    // Mobile height fix
    $(".height-fix").each(function() {
      var h = $(this).height();
      $(this).height(h);
    });
  }

  if (!isMobile) {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (pos >= navPos + $("nav-bar").height() && lastPos < pos) {
      $("nav-bar").addClass("fixed");
    }
    if (pos < navPos && lastPos > pos) {
      $("nav-bar").removeClass("fixed");
    }
    lastPos = pos;
  }
});
