$(document).ready(function() {
  var keybindings = {
    "#192": ["~", "`"],
    "#49": ["!", "1"],
    "#50": ["@", "2"],
    "#51": ["#", "3"],
    "#52": ["$", "4"],
    "#53": ["%", "5"],
    "#54": ["^", "6"],
    "#55": ["&", "7"],
    "#56": ["*", "8"],
    "#57": ["(", "9"],
    "#48": [")", "0"],
    "#189": ["_", "-"],
    "#187": ["+", "="],
    "#219": ["{", "["],
    "#221": ["}", "]"],
    "#220": ["|", "\\"],
    "#186": ["\:", "\;"],
    "#222": ["\"", "\'"],
    "#188": ["<", ","],
    "#190": [">", "."],
    "#191": ["?", "/"],
    "#18": ["ALT", "OPT"],
  };

  $(document).keydown(function(e) {
      $("#" + e.which).css("background", "#ededed");
      $("#" + e.which).css("color", "#545454");
      if (e.which == 16){
        $("#16B").css("background", "#ededed");
        $("#16B").css("color", "#545454");
        jQuery.each(keybindings, function(key, value) {
          $(key).text(value[0]);
        });
      };
  });

  $(document).keyup(function() {
      $(".key").css("background", "#545454");
      $(".key").css("color", "#ededed");
      jQuery.each(keybindings, function(key, value) {
        $(key).text(value[1]);
      });
  });

})
