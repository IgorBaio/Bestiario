$(function () {
    $("#body").onloadend(function () {

        $("#body").css("background-color", "red");
    });
    /*$("#buttao2").click(function () {
        $("#ola2").css("color", "blue");
    });
    $("#buttao3").click(function () {
        $("body").css("background-color", "black");
        $("#ola1").css("color", "#00FF00");
        $("#ola2").fadeOut();
        $("#buttao2").click(function () {

            $("#ola2")
                .fadeIn()
                .delay(1000)
                .fadeOut("slow")
                .delay(2000)
                .fadeIn()
                .css("color", "purple");
            $("#msg")
                .text("Cor alterada!!! ")
                .css({color: "blue", border: "6px solid gray"})
                .fadeOut(5000);
        });
    })*/
});