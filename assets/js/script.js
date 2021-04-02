// Start by displaying the header in the center of the page and displaying the current date and time underneath using moment.js
// Then create a grid in the body by assigning 3 columns and having the 3 columns split into rows for each hour of the day (9-5)
// Create input elements inside of each row in order for the user to input text of what they are planning
// Create a save button that will save the activity to the local storage.
// Display colors on each event throughout the column that will change from green to red once the time of day has passed.
// Create a function that will relate the user's input with the time-block
// Create a function that will then relate the time block the user entered with the time of day tracker



// Set global variables
var saveBtn = $('.saveBtn');
var dayTime = $('#currentDay');

// Current time track
var realTime = moment();
dayTime.text(realTime.format('MMM DD, YYYY [at] hh:mm:ss a'));

// Set time in hours to compare to name's, changing the string to a number with parse int.
var currentTime = parseInt(realTime.format('H'));

// Function for each row
$('.row').each(function (i, row) {
    // This changes every id to a number and assigns in to a variable.
    var time = parseInt($(this).attr('id'));
    // All if statements declared with relation to current time, and adding the appropriate class that was given.
    if(currentTime > time) {
        $(this).children('.description').addClass('past');
    } else if (currentTime === time) {
        $(this).children('.description').addClass('present');
    } else {
        $(this).children('.description').addClass('future');
    }
})

// Function to render what was saved to local storage.
function renderLastEvent() {
    // Created an array and filled it with an empty string to avoid null autofilling
    var arr = Array(9).fill("");
    // Retrieving the local storage, if there is nothing in local storage for the index. then set to an empty string.
    var lastEvent = JSON.parse(localStorage.getItem("userEvent")) || arr;
    $('.description').each(function(i) {
        $(this).val(lastEvent[i]);
    })  
}
// Calling the function to run on load.
renderLastEvent();

// Save function that runs when the user clicks the save button.
function saveEvent() {
    // Setting an empty array to a variable
    var inputArr = [];
    // Setting a function for each description
    $('.description').each(function() {
        var userEvent = $(this).val();
        console.log(userEvent);
        inputArr.push(userEvent);
    })
    // Saves items to local storage and converts to a string.
    localStorage.setItem("userEvent", JSON.stringify(inputArr));
};
// Created an event on clicking the save button.
saveBtn.on('click', function(event) {
    saveEvent();
});