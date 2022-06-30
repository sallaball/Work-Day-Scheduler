
var time = moment();

// create date

var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");



//save textarea by clicking "save" button


$("#save").on("click", function() {
    var editText = $(this).siblings(".description").val();
    var times = $(this).parent().attr("id");
    localStorage.setItem("text", JSON.stringify(editText, times));
    console.log(times);
    console.log(editText);

    // $(currentDayEl).append(times);
});





  //check what time it is

  var checkTime = function() {
    var hour = $(".hour").text().trim();

    var time = moment(hour, "LT");
    console.log(time);

    $(".hour").removeClass(".present .past .future");

    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
  };

  checkTime();

 


// //if hour has passed, add grey background
var pastHour = function(textEl) {
    var hour = $(textEl).find(".hour").text().trim();
    var time = moment(hour, "L").set("hour", 17);
    $(textEl).removeClass("future");
    console.log("time");
  
    if (moment().isAfter(time)) {
      $(textEl).addClass("future");
    } 
  };






