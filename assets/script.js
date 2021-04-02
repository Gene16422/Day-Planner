// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".appointment").val();
        var time = $(this).parent().attr("id");
        console.log("text", text);

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        console.log("timeNow", timeNow);

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            //var blockHour = parseInt($(this).attr('id').split('-')[1]);

            console.log(blockTime);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour-9 .appointment").val(localStorage.getItem("hour-9"));
    $("#hour-10 .appointment").val(localStorage.getItem("hour-10"));
    $("#hour-11 .appointment").val(localStorage.getItem("hour-11"));
    $("#hour-12 .appointment").val(localStorage.getItem("hour-12"));
    $("#hour-1 .appointment").val(localStorage.getItem("hour-13"));
    $("#hour-2 .appointment").val(localStorage.getItem("hour-14"));
    $("#hour-3 .appointment").val(localStorage.getItem("hour-15"));
    $("#hour-4 .appointment").val(localStorage.getItem("hour-16"));
    $("#hour-5 .appointment").val(localStorage.getItem("hour-17"));

    timeTracker();
})