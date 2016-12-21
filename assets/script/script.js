$(document).ready(function(){

  $("#p1").hover(function(){
    $("#o1").fadeIn(350);
  }, function(){
    $("#o1").fadeOut(350);
  });

  $("#p2").hover(function(){
    $("#o2").fadeIn(350);
  }, function(){
    $("#o2").fadeOut(350);
  });

  $("#p3").hover(function(){
    $("#o3").fadeIn(350);
  }, function(){
    $("#o3").fadeOut(350);
  });

  $("#p4").hover(function(){
    $("#o4").fadeIn(350);
  }, function(){
    $("#o4").fadeOut(350);
  });

  $("#p5").hover(function(){
    $("#o5").fadeIn(350);
  }, function(){
    $("#o5").fadeOut(350);
  });

  $("#p6").hover(function(){
    $("#o6").fadeIn(350);
  }, function(){
    $("#o6").fadeOut(350);
  });

  $(".projitem").hover(function(){
    $(".overlay-bar").css("width","250px");
    $(".overlay-text").css("right","-15px");
  }, function(){
    $(".overlay-bar").css("width","0px");
    $(".overlay-text").css("right","-275px");
  });

  $("#help").hover(function(){
    $("#textbox13").fadeIn(350);
  }, function(){
    $("#textbox13").fadeOut(350);
  });

  $("#note").hover(function(){
    $("#textbox7").fadeIn(350);
  }, function(){
    $("#textbox7").fadeOut(350);
  });
});
