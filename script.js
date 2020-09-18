var today = (moment().format("dddd, MMMM Do YYYY"));;
var currentHour = (moment().format("hA")); 
// Puts date at top of page
$("#currentDay").text(today);
// console.log(moment('17/09/2020 12:07:02', 'DD MM YYYY HH:mm:ss').isBefore('17/09/2020 15:07:05', 'DD MM YYYY HH:mm:ss'));

// DD MM YYYY hh:mm:ss

var timeBlockArr = [
    {
    hour: "9AM",
    content: ""},
    {
    hour: "10AM",
    content: ""},
    {
    hour: "11AM",
    content: ""},
    {
    hour: "12PM",
    content: ""},
    {
    hour: "1PM",
    content: ""},
    {
    hour: "2PM",
    content: ""},
    {
    hour: "3PM",
    content: ""},
    {
    hour: "4PM",
    content: ""},
    {
    hour: "5PM",
    content: ""}
]
// var timeBlock = {
//     hour: ""
//     content: ""
// }                     
// TODO: I am not correctly setting the parameters for selecting the array INDEX to access the value of HOUR and CONTENT
        timeBlockArr.forEach(function(timeBlock) {
              var rowEl = $("<div>").addClass("row time-block");
              var timeEl = $("<div>").addClass("col-md-2 hour");
              var pTag = $("<p>");
            //   pTag.text(`${timeBlock.hour}`);
            $("<p>").text(`${timeBlock.hour}`)
            timeEl.append(pTag);
            rowEl.append(timeEl);
            var textEl = $("<div>").addClass("col-md-8 description");
            if (hour === currentHour) {
                textEl.addClass("present");
            } else if ((moment(hour).isBefore(currentHour))) {
                textEl.addClass("past");
            } else {
                textEl.addClass("future");
            };
            var textArea = $("<textarea>");
            textArea.text(`${timeBlock.content}`);
            textEl.append(textArea);
            rowEl.append(textEl);
            var saveBtn = $("<div>").addClass("col-md-2 saveBtn");
             var floppy = $("<i>").addClass("fa fa-save")
            saveBtn.append(floppy)
            $(".saveBtn").on("click", function(){
                    // TODO: local storage
                    localStorage.setItem("timeBlockArr", JSON.stringify())
                    function getLocalStorage(){
                        var localStorageData = JSON.parse(localStorage.getItem("timeBlockArr"))
                        localStorageData.forEach(function(timeBlock){
                            textArea.text(`${timeBlock.content}`)
                        });
                    }
                    rowEl.append(saveBtn)
                    $(".container").append(rowEl)
            });
        });
                        


// TODO: methods from moments called "isBefore, and isAfter". Look on moment.js docs for info.
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