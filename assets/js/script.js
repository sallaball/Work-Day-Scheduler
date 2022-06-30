
var text = {};
var time = moment();
// create date

var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");


//array for times



// // edit textarea
// $(".container .time-block").on("click", "textarea", function() {
//     var text = $(this).text().trim();


// });

//Loop through time slots



// var saveText = function() {
//     localStorage.setItem("text", JSON.stringify(text));
//   };

//save textarea by clicking "save" button
$("#save").on("click", function() {
    var editText = $(this).siblings(".description").val();
    var times = $(this).parent().attr("id");
    localStorage.setItem(times, editText);
    console.log(times);
    console.log(editText);

});

// $("#container .saveBtn").click(function() {
//     // get form values
//     var Text = $(".description").val();

  
//     if (taskText && taskDate) {
//       createTask(taskText, taskDate, "toDo");
  
//       // close modal
//       $("#task-form-modal").modal("hide");
  
//     //   // save in tasks array
//     //   text.toDo.push({
//     //     text: taskText,
//     //   });
  
//       saveText();
//     }
//   });

 


// //if hour has passed, add grey background
// var pastHour = function(textEl) {
//     var hour = $(textEl).find(".hour").text().trim();
//     var time = moment(hour, "L").set("hour", 17);
//     $(textEl).removeClass("future");
//     console.log("time");
  
//     // if (moment().isAfter(time)) {
//     //   $(textEl).addClass("future");
//     // } else if (Math.abs(moment()) <= ) {
//     //   $(textEl).addClass("present");
//     // }
//   };






