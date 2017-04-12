/**
 * Created by willwang on 4/6/17.
 */

var mode = -1;

function showThis(num) {
    try {
        mode = num;
        $("#runButton").show();
        $(".jumbotron").hide();
        if (num == 0) {
            $("#mode0jumbo").show();
        } else if (num == 1) {
            $("#mode1jumbo").show();
        } else {
            $("#mode2jumbo").show();
        }
    } catch (err) {
        alert(err.stack);
    }
}

function clearButton() {
    try {
        var name = "m" + mode.toString();
        var x = 500;
        for (var i = 0; i < x; i++) {
            var item = document.getElementById(name + i.toString());
            if (item == null) {
                break;
            }
            item.value = "";
        }
    } catch (err) {
        alert(err.stack);
    }
}

function runButton() {
    try {
        var message = "";
        message += "?MODE=" + mode.toString();
        var name = "m" + mode.toString();
        var x = 500;
        for (var i = 0; i < x; i++) {
            message += "&";
            var value = document.getElementById(name + i.toString());
            if (value == null) {
                break;
            }
            value = value.value;
            var label = document.getElementById(name + "f" + i.toString()).innerHTML;
            message += label + "=" + value;
        }
        location.href += message;
    } catch (err) {
        alert(err.stack);
    }
}

