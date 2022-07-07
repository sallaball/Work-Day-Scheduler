

var text = {};

// create date

var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format("dddd, MMMM Do YYYY");

var timesArr = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

//save textarea by clicking "save" button
$(document).ready(function () {
    var time = parseInt(moment().format("HH"));
   
    var buildBlocks = function () {
        for (i=0; i<timesArr.length; i++) {
            var newRow = $("<div>").attr("id", timesArr[i]).attr("class", "time-block row")
            var newHour = $("<div>").attr("class", "hour col-md-1").text(timesArr[i]);
            var newTA = $("<textarea>").val(localStorage.getItem(timesArr[i]))
            
            if(i < time - 8) {
                newTA.attr("class", "description past col-md-10")
            }else if(i == time - 8) {
                newTA.attr("class", "description present col-md-10")             
            }else {
                newTA.attr("class", "description future col-md-10")
            }
            
            var newBtn = $("<button>").attr("class", "btn saveBtn col-md-1").html("<i class='fas fa-save'></i>");
            
            newBtn.on("click", function () {
                var text = $(this).siblings(".description").val();
                var times = $(this).parent().attr("id");
                localStorage.setItem(times, text);
                console.log(times);
                console.log(text);
            });

            newRow.append(newHour)
            newRow.append(newTA)
            newRow.append(newBtn)

            $(".container").append(newRow)
        }
    };

    buildBlocks();
});