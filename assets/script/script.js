$(document).ready(function() {

  function moveName() {
      var elem = document.getElementById("name");
      var pos = 0;
      var id = setInterval(frame, 20);
      $("#name").fadeIn(2000);
      function frame() {
          if (pos == 75) {
              clearInterval(id);
          } else {
              pos++;
              elem.style.top = pos + 'px';
          }
      }
  }

  function moveMoreProj() {
      var scrolled = $(window).scrollTop();
      if (scrolled > 1400) {
          $("#projects").fadeIn(3000);
          $("#moreproj").fadeIn(3000);
      }
  }

  function parallax() {
    var scrolled = $(window).scrollTop();
    var reference = $("#projects").css("top");
    var wide = $(window).width();
    if ((scrolled > 1300) && (wide > 1300)) {
    $("#proj1").css('left', 0 + ((scrolled - 1800) * 0.3) + 'px');
    $("#proj2").css('right', 0 + ((scrolled - 1800) * 0.3) + 'px');
    $("#proj3").css('left', 0 + ((scrolled - 2400) * 0.3) + 'px');
    } else {
    $("#proj1").css('left', 0);
    $("#proj2").css('left', 0);
    $("#proj3").css('left', 0);
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
    $("#projects").fadeIn(2000);
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + 'px';
        }
    }
  }

  function movePic() {
      var elem = document.getElementById("mypic");
      var pos = 150;
      var id = setInterval(frame, 20);
      $("#mypic").fadeIn(2000);

      function frame() {
          if (pos == 75) {
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

  function displaySkills() {
    $("#moreskill").click(function(){
      $("#add-skill").slideToggle("slow");
      if ($("body").css("height") == "3800px") {
        $("body").css("height", "4400px");
      } else {
        $("body").css("height", "3900px");
      }
    })
  }

  function displayMenu() {
    var scrolled = $(window).scrollTop();
    var wide = $(window).width();
    if ((scrolled > 400) && (wide > 1300)) {
      $("#menu").fadeIn(1000);
      $("#add-skill").css("left", "0");
    } else {
      $("#menu").fadeOut(1000);
      $("#add-skill").css("left", 0);
    }
  }

  function pressKeyboardAction(){

  }

  jQuery(document).ready(function($) {
  	$(".scroll").click(function(event){
  		event.preventDefault();
  		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 750);
  	});
  });

  $(window).scroll(function(){
    skillfade();
    parallax();
    moveMoreProj();
    displayMenu();
  });

  moveName();
  movePic();
  displaySkills();
  setTimeout(function(){moveLink(1);}, 4000);
  setTimeout(function(){moveLink(2);}, 4200);
  setTimeout(function(){moveLink(3);}, 4400);
  setTimeout(function(){moveLink(4);}, 4600);
  setTimeout(function(){moveLink(5);}, 4800);

})
