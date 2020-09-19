var today = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().hours();
// Puts date at top of page
$("#currentDay").text(today);
//Establishing an array to put time and content on page, and to compare to currentHour for purposes of proper class addition
var timeBlockArr = [
  {
    mHour: 09,
    hour: "9AM",
    content: "",
  },
  {
    mHour: 10,
    hour: "10AM",
    content: "",
  },
  {
    mHour: 11,
    hour: "11AM",
    content: "",
  },
  {
    mHour: 12,
    hour: "12PM",
    content: "",
  },
  {
    mHour: 13,
    hour: "1PM",
    content: "",
  },
  {
    mHour: 14,
    hour: "2PM",
    content: "",
  },
  {
    mHour: 15,
    hour: "3PM",
    content: "",
  },
  {
    mHour: 16,
    hour: "4PM",
    content: "",
  },
  {
    mHour: 17,
    hour: "5PM",
    content: "",
  },
];

timeBlockArr.forEach(function (timeBlock) {
  var rowEl = $("<div>").addClass("row time-block");
  var timeEl = $("<div>").addClass("col-md-1 hour");
  timeEl.text(`${timeBlock.hour}`);
  rowEl.append(timeEl);
  var textArea = $("<textarea>").addClass("col-md-10 description");
  if (timeBlock.mHour === currentHour) {
    textArea.addClass("present");
  } else if (timeBlock.mHour < currentHour) {
    textArea.addClass("past");
  } else {
    textArea.addClass("future");
  }
  textArea.val(`${timeBlock.content}`);
  textArea.attr("id", timeBlock.mHour);
  rowEl.append(textArea);
  var saveBtn = $("<button>").addClass("col-md-1 saveBtn");
  saveBtn.attr("data-hour", timeBlock.mHour);
  var floppy = $("<i>").addClass("fa fa-save");
  saveBtn.append(floppy);
  rowEl.append(saveBtn);
  $(".container").append(rowEl);

  $(document).on("click", ".saveBtn", function (event) {
    //  console.log($(this).attr("data-hour"));
     console.log($(this).siblings())

    localStorage.setItem(
      $(this).siblings().val,
      JSON.stringify(timeBlock.content)
    );
    function getLocalStorage() {
      var localStorageData = JSON.parse(localStorage.getItem("timeBlockArr"));
      localStorageData.forEach(function (timeBlock) {
        // grab Val, not text
        textArea.val(`${timeBlock.content}`);
      });
    }
  });
});

// TODO: .val for retrieving "text" written into a form or an input

// TODO:use local storage (set var for array, push information to array, get information back from array)
// TODO:have page refresh for next day?

// var initials = prompt("Game Over, final score: " + score + ". Please enter your initials for the scoreboard.")
//         var user = {
//         initials: initials,
//         score: score
//         }
// timeBlockArr.push(con)
// userScores.push(user)
// localStorage.setItem("userScores", JSON.stringify(userScores))
// highScoresBtn.addEventListener("click", function(){
//     scoreList.textContent = ""
//     function getLocalStorage(){
//         scoreList.classList.remove("hideBtn")
//         var localStorageData = JSON.parse(localStorage.getItem("userScores"))
//         localStorageData.forEach(function(user){
// var pTag = document.createElement("p")
//  pTag.textContent = `${user.initials} - ${user.score}`
//  document.querySelector("#scoreList").appendChild(pTag)
// })
//     }
//         getLocalStorage()
// });
// PSUEDO CODE for creating dynamic elements on the page

// for each "hour" Create a Row and set appropriate class for row
// create a column
// set "hour" class for column
// set textContent to the hour
// append to Row
// create column for text-area
// set class/classes for column
// check time against current time, to {if, else if, else} to set appropriate class
// set value of text area to the div if it has one
// append to Row
// create another column with the i save thing
// assign the click event listener and the class
// append to Row
// THIS CREATES ONE hour line
// append to container
// var pTag = $("<p>");
// pTag.text(`${timeBlock.hour}`);
// timeEl.append(pTag);
// var textArea = $("<textarea>");
// textEl.append(textArea);
