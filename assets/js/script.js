// Start by displaying the header in the center of the page and displaying the current date and time underneath using moment.js
// Then create a grid in the body by assigning 3 columns and having the 3 columns split into rows for each hour of the day (9-5)
// Create input elements inside of each row in order for the user to input text of what they are planning
// Create a save button that will save the activity to the local storage.
// Display colors on each event throughout the column that will change from green to red once the time of day has passed.
// Create a function that will relate the user's input with the time-block
// Create a function that will then relate the time block the user entered with the time of day tracker

var saveBtn = $('.saveBtn');
var dayTime = $('#currentDay');
var userInput = $('.description');

// Current time track
var realTime = moment();
dayTime.text(realTime.format('MMM DD, YYYY [at] hh:mm:ss a'));

// Set time in hours to compare to name's
var currentTime = realTime.format('H');




// function saveEvent() {
//     var userEvent = userInput.value;
//     localStorage.setItem("userEvent", JSON.stringify(userEvent))
// };

// function renderLastEvent() {
//     var lastEvent = JSON.parse(localStorage.getItem("userEvent"));

//     if( lastEvent !== null) {
//         $('.description').innerHTML = lastEvent.userEvent;
//     } else {
//         return;
//     }
// };

// saveBtn.on('click', function(event) {
//     event.preventDefault();
//     saveEvent();
//     renderLastEvent();
// });

// function init() {
//     renderLastEvent();
// }
// init();