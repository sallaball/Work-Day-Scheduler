

var text = {};

// create date

var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");


//save textarea by clicking "save" button
$(document).ready(function() {
  
    $(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var times = $(this).parent().attr("id");
    localStorage.setItem(text, times);
console.log(times);
console.log(text);
    });

    var loadText = function() {
        tasks = JSON.parse(localStorage.getItem("text"));
    };
loadText();
});














  //check what time it is
    
  var checkTime = function() {
    var hour = $(".hour").text().trim();

    var time = moment().hour();
    console.log(time, hour);

    $(".time-block").removeClass(".present .past .future");

    if (moment().isAfter(time)) {
        $(".time-block").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".time-block").addClass(".future");
    } else {
        $(".time-block").addClass(".present");
    }
    
  };
  checkTime();
  

 









