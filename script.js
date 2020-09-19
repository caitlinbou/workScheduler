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
// Dynamically create the rows and columns of scheduler, including styling
timeBlockArr.forEach(function (timeBlock) {
  var rowEl = $("<div>").addClass("row time-block");
  var timeEl = $("<div>").addClass("col-md-1 hour");
  timeEl.text(`${timeBlock.hour}`);
  rowEl.append(timeEl);
  var textArea = $("<textarea>").addClass("col-md-10 description");
  // compare time to "now" to determine color of textarea
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
// click event to trigger saving to localStorage
  $(document).on("click", ".saveBtn", function (event) {
  // set items to localStorage
    if($(this).attr("data-hour") == textArea.attr("id")) {
      timeBlock.content = textArea.val()
      localStorage.setItem(textArea.attr("id"), textArea.val(), JSON.stringify(textArea.val()))
    } 
  });
  //  get items from local storage
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#13").val(localStorage.getItem("13"));
  $("#14").val(localStorage.getItem("14"));
  $("#15").val(localStorage.getItem("15"));
  $("#16").val(localStorage.getItem("16"));
  $("#17").val(localStorage.getItem("17"));
  
});
