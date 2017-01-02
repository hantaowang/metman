$(document).ready(function(){

  $(".item").on('click', function() {
      var name = $(this).attr('id')[1];
      var state = $(this).data('state');
      state = 1;
      state = !state;
      if (state) {
          $(this).css("background-color", "#3ABEFF");
          $(this).css("color", "#f1f1f1");
          $("#d" + name).slideDown();
      } else {
          $(this).css("background-color", "#f1f1f1");
          $(this).css("color", "black");
          $("#d" + name).slideUp();
      }
      $(this).data('state', state);
  });


  $("#resume").click(function(){
    $("#mo1").fadeIn(350);
  });

  $("#servo").click(function(){
    $("#mo2").fadeIn(350);
  });

  $("#servoessay").click(function(){
    $("#mo3").fadeIn(350);
  });


  $(".mainoverlay").click(function(){
    $(".mainoverlay").fadeOut(350);
    $(".main").enable();
  });












});
