var timeDisplayEl = $('#time-display');
var saveButtonEl = $('.saveBtn');
var todoInputEl = $('.description');
var planner = $('.container-lg');
var todoHourEl = dayjs().hour();


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

$(document).ready(function () {
  $('textarea').each(function () {
    var id = parseInt($(this).attr('id'));
    //console.log typeof = number
    var currentHour = dayjs().hour();
    //console.log typeof = number
    if (currentHour === id) {
      this.style.backgroundColor = "green"
    }
    if (currentHour > id) {
      this.style.backgroundColor = "red"
    }
      if (currentHour < id) {
        this.style.backgroundColor = "gray"
      }

    
    });
  });





  
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?



function handleTodosFromSave(event) {
  event.preventDefault();
  var todoDescription = todoInputEl.val().trim();
  

  console.log(todoDescription);

  var plannerEl = $('textarea').attr('id');

  for(let i = 0; i < plannerEl.length; i++)
   localStorage.setItem("todoDescription" ,JSON.stringify(todoDescription));

 
}

//There is something not working here to generate more than 1 todo AND I need to connect the id with the description





saveButtonEl.on('click', handleTodosFromSave);


displayTime();
setInterval(displayTime, 1000);


