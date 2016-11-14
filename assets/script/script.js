$(document).ready(function() {

  function moveName() {
      var elem = document.getElementById("name");
      var pos = 0;
      var id = setInterval(frame, 14);
      $("#name").fadeIn(2000);
      function frame() {
          if (pos == 125) {
              clearInterval(id);
          } else {
              pos++;
              elem.style.top = pos + 'px';
          }
      }
  }

  function moveMoreProj() {
      var scrolled = $(window).scrollTop();
      if (scrolled > 2100) {
          $("#moreproj").fadeIn(2000);
      }
  }

  function parallax() {
    var scrolled = $(window).scrollTop();
    var reference = $("#projects").css("top")
    if (scrolled > 1200) {
    $("#proj1").css('left', 0 + ((scrolled - 1500) * 0.3) + 'px');
    $("#proj2").css('right', 0 + ((scrolled - 1500) * 0.3) + 'px');
    $("#proj3").css('left', 0 + ((scrolled - 1500) * 0.3) + 'px');
    }
  }

  function skillfade() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 400) {
      $("#skills").fadeIn(2000);
      $("#moreskill").fadeIn(2000);
    }
  }

  function moveProj(name) {
    var elem = document.getElementById(name);
    var pos = 300;
    var id = setInterval(frame, 12);
    $(".project").fadeIn(2000);
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.left = pos + 'px';
        }
    }
  }

  function movePic() {
      var elem = document.getElementById("mypic");
      var pos = 300;
      var id = setInterval(frame, 10);
      $("#mypic").fadeIn(1000);

      function frame() {
          if (pos == 125) {
              clearInterval(id);
              $("#mypic").hover(function(){
                $("#mypic").css('opacity', 0);
              }, function(){
                $("#mypic").css("opacity", 1);
              });
              $("#mypic").css('transition', 1 + 's');
              $("#mypic-fake").show();
          } else {
              pos--;
              elem.style.top = pos + 'px';
          }
      }
  }

  function moveLink(link) {
      var elem = document.getElementById("l" + link);
      var pos = 50;
      var id = setInterval(frame, 45);
      $("#l" + link).fadeIn(2000);
      function frame() {
          if (pos == 0) {
              clearInterval(id);
              $("#l" + link).css("transition", 0.5 + "s");
          } else {
              pos--;
              elem.style.top = pos + 'px';
          }
      }
  }

  $(window).scroll(function(){
    skillfade();
    parallax();
    moveMoreProj();
  });

  function displaySkills(){
    $("#moreskill").click(function(){
      $("#add-skill").slideToggle("slow");
    })
  };

  moveName();
  movePic();
  displaySkills();
  setTimeout(function(){moveLink(1);}, 4000);
  setTimeout(function(){moveLink(2);}, 4200);
  setTimeout(function(){moveLink(3);}, 4400);
  setTimeout(function(){moveLink(4);}, 4600);
  setTimeout(function(){moveLink(5);}, 4800);

})
