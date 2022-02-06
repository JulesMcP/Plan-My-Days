// // today's date global variable
var currentDate = moment().format('[Today is] dddd, MMMM Do YYYY');
$("#currentDay").html(currentDate);

// save button function
$(document).ready(function() {
    // Save events
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
});

    function updateHour() {
        // Check current hour (0-24)
        var currentHour = moment().hours();
        console.log("currentHour");
    
        // Check timeblocks for past, present, or current time
        $(".time-block").each(function() {
          var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
          if (timeBlock < currentHour) {
            $(this).addClass("past");
          } 
          else if (timeBlock === currentHour) {
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
    
    updateHour();
    
    // Check if current time needs updated
    var interval = setInterval(updateHour, 15000);
  
    // get saved data from localStorage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));