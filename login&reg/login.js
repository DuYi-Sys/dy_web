CDNscope(function(){
    console.log("hello");
    // =============================
    function Addinput(id, value){//什么都不填等于清空
        if(id && value){
            var code = '<input type="text" name="ant" id="'+id+'" class="DUYI_input textinput" value="'+value+'"><div></div>';
            $("#inputarea").html($("#inputarea").html()+code);
        }else{
            $("#inputarea").html("");
        }
    }

    window.temp={};
    window.temp.Addinput=Addinput;

},"jquery");