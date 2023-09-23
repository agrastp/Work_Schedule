//Time and Date Display 

var timeDisplayEl = $('#time-display');


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


//Page is ready when rendered & compares current hour to planner time

$(document).ready(function () {
  $('textarea').each(function () {
    var id = parseInt($(this).attr('id'));
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
  });
});

//When Save Buttons are clicked, todo and time will be 'set' into local storage

var saveButtonEl = document.querySelectorAll("button.saveBtn");
var todos = document.querySelectorAll("textarea.description");
saveButtonEl.forEach((btn, i) => {
  btn.addEventListener("click", function (event) {
    const textarea = todos[i]
    localStorage.setItem(`todo_item_${i}`, textarea.value)
  });
})


//Renders the saved items in local storage so they do not disappear when page reloads
function SavedPlannerItems() {
  todos.forEach((textarea, i) => {
    var savedText = localStorage.getItem(`todo_item_${i}`);
    if (!savedText) {
      return;
    }
    textarea.textContent = savedText;
  });
}


//Functions to be called when website loads
SavedPlannerItems();
displayTime();
setInterval(displayTime, 1000);


