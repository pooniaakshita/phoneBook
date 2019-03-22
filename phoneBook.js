var i = 1;

function showContName(){
    var na = $("#un").val();
    $("#nameHere").text("Name: "+na);
}

function showContNumb(){
    var nu = $("#nu").val();
    $("#numbHere").text("Number: "+nu);
}

$(document).ready(function(){
    $("#formAdd,.showButt,#showRunTime").hide();
    $("#error").hide();
    $("#button1").click(function(){
        $("#error").hide();
        $(".showContent").hide();
        $("#formAdd,#showRunTime").show();
    });
    $("#finalAdd").click(function(){
        $("#formAdd,#showRunTime").hide();
        $(".showContent,.showButt").show();
        var name = $("#un").val(),
            number = $("#nu").val(),
            strInp = '<input type="button" id="b'+i+'" value="Delete" style="width: 100%; height: 10%; padding: 1%; margin-top: 15px; color: white; background-color: red;">';
        var id = "b"+i;
        if(name == "" || number == "") { $("#error").show(); }
        else{
            $("#error").hide();
            $(".showName").append('<p class="'+id+'">'+name);
            $(".showNumber").append('<p class="'+id+'">'+number)
            $(".showButt").append(strInp);
            i += 1;
        }
    });
    $('.showButt').click(function(event){
        $("#error").hide();
        var id = event.target.id;
        var rcl = "."+id;
        var rid = "#"+id;
        $(rcl).remove();
        $(rid).remove();
    });
    $("#un").keyup(showContName);
    $("#nu").keyup(showContNumb);
});