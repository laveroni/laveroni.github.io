var main = function() {
  
  $('.icon-menu').click(function() {
    
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);

    $('.icon-menu').animate({
      left: "285px"
    }, 200);

    $('.icon-menu').hide(0);

  });


  $('.icon-close').click(function() {
    
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').show(0);

  });

   $('.wrapper').click(function() {
    
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').show(0);

  });

  $('.ab').click(function() {
     $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1500);
  });

  $('.ed').click(function() {
     $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('html, body').animate({
        scrollTop: $(".education").offset().top
    }, 1500);
  });

  $('.sk').click(function() {
     $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 1500);
  });

  $('.ex').click(function() {
     $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('html, body').animate({
        scrollTop: $(".experience").offset().top
    }, 1500);
  });

  $('.re').click(function() {
     $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('html, body').animate({
        scrollTop: $(".resume").offset().top
    }, 1500);
  });

  $('.co').click(function() {
     $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    $('.icon-menu').animate({
      left: "0px"
    }, 200);

    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1500);
  });

};


$(document).ready(main);