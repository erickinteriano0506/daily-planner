$(document).ready(function() {

    $(".savebtn").on("click", function() {

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id";);

        localStorage(time, value);
    });

    
})