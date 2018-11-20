var DUYI_UI = {};
DUYI_UI.init_checkbox = function () {
    var node = document.getElementsByClassName("DUYI_checkbox");
    for (var i = 0; i < node.length; i++) {
        (function () {
            var _i = i;
            (node[_i].getAttribute("value")) || (node[_i].setAttribute("value", "选择框"));
            (node[_i].getAttribute("active")) || (node[_i].setAttribute("active", "false"));
            node[_i].innerHTML = node[_i].getAttribute("value");
            node[_i].addEventListener("click", function () {
                if (node[_i].getAttribute("active") == "false") {
                    node[_i].setAttribute("active", "true")
                } else {
                    node[_i].setAttribute("active", "false")
                }
            })
        })();
    }
}