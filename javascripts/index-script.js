$(document).ready(function(){

  $(document).on('click', 'a', function(event){
    event.preventDefault();

    $("#wrapper").animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });

  $('#wrapper').on('scroll', function () {
      $("body").scrollTop($(this).scrollTop());
  });

  $(".projitem").hover(function(){
    var name = $(this).attr('id')[1];
    $("#o" + name).fadeIn(350);
    $(".overlay-bar").css("width","250px");
    $(".overlay-text").css("right","-15px");
  }, function(){
    var name = $(this).attr('id')[1];
    $("#o" + name).fadeOut(350);
    $(".overlay-bar").css("width","0px");
    $(".overlay-text").css("right","-275px");
  });

    $(document).scroll( function() {

      var value = $("#wrapper").scrollTop();

      if (value > 100) {
        $("#scrollwarning").fadeOut();
      }

      if ( value < 500){
          $("#name").css("font-size", 130 - (value * 0.16) + "pt");
          $("#name").css("position", "fixed");
          $("#name").css("top", "200px");
      } else {
          $("#name").css("font-size", "50pt");
          $("#name").css("position", "relative");
          $("#name").css("top", "700px");
      }

      if (( value < 400) && (value > 100)){
          $("#subtitle").css("opacity", 4/3 - value/300);
      } else if (value <= 100){
        $("#subtitle").css("opacity", 1);
      } else {
          $("#subtitle").css("opacity", 0);
      }

      if (value + $(window).height() - 200 >= $('#about').position().top && value + $(window).height() - 200 < $('#projects').position().top){
        $("#menuabout").css("background", "rgba(255, 255, 255, 0.3)");
      } else {
        $("#menuabout").css("background", "transparent")
      }

      if (value + $(window).height() - 200 >= $('#projects').position().top && value + $(window).height() - 200 < $('#part2').position().top) {
        $("#menuprojects").css("background", "rgba(255, 255, 255, 0.3)");
      } else {
        $("#menuprojects").css("background", "transparent");
      }

      if (value + $(window).height() - 200 >= $('#part2').position().top && value + $(window).height() - 200 < $('#experience').position().top) {
        $("#menuskills").css("background", "rgba(255, 255, 255, 0.3)");
      } else {
        $("#menuskills").css("background", "transparent");
      }

      if (value + $(window).height() - 200 >= $('#experience').position().top && value + $(window).height() - 200 < $('#contact').position().top) {
        $("#menuexp").css("background", "rgba(255, 255, 255, 0.3)");
      } else {
        $("#menuexp").css("background", "transparent");
      }

      if (value + $(window).height() - 200 >= $('#contact').position().top) {
        $("#menucontact").css("background", "rgba(255, 255, 255, 0.3)");
      } else {
        $("#menucontact").css("background", "transparent");
      }

     });

});
