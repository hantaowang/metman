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

  $("#p7").hover(function(){
    $("#o7").fadeIn(350);
  }, function(){
    $("#o7").fadeOut(350);
  });

  $("#p8").hover(function(){
    $("#o8").fadeIn(350);
  }, function(){
    $("#o8").fadeOut(350);
  });

  $("#p9").hover(function(){
    $("#o9").fadeIn(350);
  }, function(){
    $("#o9").fadeOut(350);
  });

  $("#p10").hover(function(){
    $("#o10").fadeIn(350);
  }, function(){
    $("#o10").fadeOut(350);
  });

  $("#p11").hover(function(){
    $("#o11").fadeIn(350);
  }, function(){
    $("#o11").fadeOut(350);
  });

  $("#p12").hover(function(){
    $("#o12").fadeIn(350);
  }, function(){
    $("#o12").fadeOut(350);
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

  $("#link1").click(function(){
    $("#mo1").fadeIn(350);
  });

  $("#link2").click(function(){
    $("#mo2").fadeIn(350);
  });

  $(".mainoverlay").click(function(){
    $(".mainoverlay").fadeOut(350);
    $("#main").enable();
  });

  $("#link3").click(function(){
    $("#mo3").fadeIn(350);
    $("#main").disable();
  });

  var imagesArray = ["assets/img/dilbert/d1.jpg", "assets/img/dilbert/d2.gif", "assets/img/dilbert/d3.gif", "assets/img/dilbert/d4.gif", "assets/img/dilbert/d5.gif"];
  var localArray = []
  $("#button").click(function(){
    $("#mo4").fadeIn(350);
    var num = Math.floor(Math.random() * 5);
    document.canvas.src = imagesArray[num];
  });

  var text = ["Welcome", "Sup.", "Alola", "Greetings", "01101000 01100101 01101100 <br>01101100 01101111 ", "Hello"];
  var counter = 0;
  var elem = document.getElementById("part5title");
  setInterval(change, 3000);
  function change() {
  $("#part5title").fadeOut(350);
    window.setTimeout(partB,1000);
  };
  function partB(){
    var elem = document.getElementById("part5title");
    elem.innerHTML = text[counter];
       counter++;
       if(counter >= text.length) { counter = 0; }
       if(counter == 5) {
         $("#part5title").css("line-height", "12.5vh");
         $("#part5title").css("letter-spacing", "0px");
       } else {
         $("#part5title").css("line-height", "25vh");
         $("#part5title").css("letter-spacing", "15px");
       };
   $("#part5title").fadeIn(350);
 };

});
