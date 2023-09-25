//Time and Date Display 

var timeDisplayEl = $('#time-display');


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


//Page is ready when rendered & compares current hour to planner time using color coding.
//Red is in the present, gray is in the past, and green is in the future.
//Gets the hour and textarea todo to store in local storage.
//Renders back on page by pulling from local storage.

$(document).ready(function () {
  $('textarea').each(function () {
    var parentId = $(this).parent().attr('id').split("-")[1];
    var id = parseInt(parentId);
    var currentHour = dayjs().hour();
    if (currentHour === id) {
      this.style.backgroundColor = "red"
    }
    if (currentHour > id) {
      this.style.backgroundColor = "gray"
    }
    if (currentHour < id) {
      this.style.backgroundColor = "green"
    }
    $(this).val(localStorage.getItem(parentId))
    $(this).siblings(".btn").on("click", function () {
    localStorage.setItem(parentId, $(this).siblings("textarea").val());
    })
  });
});


displayTime();
setInterval(displayTime, 1000);


