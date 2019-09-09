$(document).ready(function() {


var socket = io();

let green = document.getElementById("green"),
    blue = document.getElementById("blue"),
    yellow = document.getElementById("yellow");

    $("button").click(function (e) {
        socket.emit('change', $(this).attr('id'));
    });

    socket.on('change', function(data){
        $("body").css("background-color", data);
    })

});