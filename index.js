$(document).ready(function(){
    console.log("helloworld");
    
    $("#todobutton").click(function(){
        console.log("Button works")
        var numberofpomadaros=$("#pomadarosinput").val()
        var nameoftodo=$("#todoinpput").val()
        console.log(nameoftodo)
        $("ul").append("<li><input type='checkbox' />" 
        + nameoftodo + "<span class='time'>" 
        + numberofpomadaros 
        + " pomadaros </span></li>")
    })
$("input[type='checkbox']").click(function(){
    $(this).closest("li").toggleClass("completed")
    $(this).closest("span").toggleClass("completed-time")
}
)

})

