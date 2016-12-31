$(document).ready(function(){

  $(".item").on('click', function() {
      var name = $(this).attr('id')[1];
      var state = $(this).data('state');
      state = !state;
      var sname = "s" + name
      var ele = document.getElementById(sname);
      if (state) {
          $(this).css("background-color", "#3ABEFF");
          $(this).css("color", "#f1f1f1");
          $("#d" + name).slideDown();
          ele.innerHTML = '-';
          $("#s" + name).css("line-height", "25px");
      } else {
          $(this).css("background-color", "#f1f1f1");
          $(this).css("color", "black");
          $("#d" + name).slideUp();
          ele.innerHTML = '+';
          $("#s" + name).css("line-height", "30px");
      }
      $(this).data('state', state);
  });


















});
