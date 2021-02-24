$(document).ready(function() {

    $(".savebtn").on("click", function() {

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id";);

        localStorage(time, value);
    });

    function hourUpdater() {

        var currentHour = moment().hours();

        $(".time-block").each(function() {
            var blockHour = pareInt($(this).attr("id").split("-")[1]);

            if ( blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
})