
var time = moment();

// create date

var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");



//save textarea by clicking "save" button

var saveText = function() {
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var times = $(this).parent().attr("id");
    localStorage.setItem(text, times);
    // console.log(times);
    // console.log(text);
      

})};

saveText();



//get saved items from local storage

var textBox = localStorage.getItem(".descritpion");





  //check what time it is

  var checkTime = function() {
    var hour = $(".hour").text().trim();

    var time = moment().hour();
    console.log(time, hour);

    $(".hour").removeClass(".present .past .future");

    if (moment().isAfter(time)) {
        $(this).addClass(".past");
    } else if (moment().isBefore(time)) {
        $(this).addClass(".future");
    } else {
        $(this).addClass(".present");
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






