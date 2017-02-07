/**
 * Created by willwang on 2/3/17.
 */
$(document).ready(function() {

    $(".menu-item").click(function(){
        var name = this.getAttribute('id').slice(0, 5);
        $(".box-item").hide();
        $(".menu-item").css("background-color", "transparent");
        $(this).css("background-color", "rgba(255, 255, 255, 0.3)");
        $("#" + name).show();
    })

    var click = true;
    if (click) {
        $("#m1i01-menu").css("background-color", "rgba(255, 255, 255, 0.3)");
        $("#m1i01").show();
        click = false;
    }

    $('.box-item').on( 'mousewheel DOMMouseScroll', function (e)  {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        e.preventDefault();
    });

});
