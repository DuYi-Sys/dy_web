
var sub_timer = [];

CDNscope(function(){
    function clearSub(){
        for(var i in sub_timer){
            clearInterval(sub_timer[i]);
        }
        sub_timer = [];
    }

    htmlobj=$.ajax({url:"./Show.html",async:false});
    $("#DUYIframe").append(htmlobj.responseText);
    $(".DUYI_chooseButton_underline_none.choose_button")[1].onclick = function(){
        $("#DUYIframe").html("");
        clearSub();
    }

},"jquery");