//Variables
var displayDate  = document.getElementById ("currentDay");

//Date: Weekday, short month, Date, short Year
//var currentDate = moment().format('dddd') + moment().format("MMM Do YY");
//console.log (currentDate);
//Time: 
//var currentTime = moment().format("hh:mm:ss A");
//console.log(currentTime);




// Date and hour 

// Display Date - Get time (no display)
function timeUpdate() {
        var today = moment ();
        var currentDate = today.format('dddd') + today.format(", Do MMM YY");
        //console.log (currentDate)
        var currentTime = today.format("hh:mm:ss A");
        //console.log(currentTime);
        displayDate.textContent = currentDate;
};

//Set in intervall to be updated every sec
setInterval (timeUpdate, 1000);
//console.log(setInterval);
timeUpdate ();
//console.log(timeUpdate);


//Change color style according to current time







//Store UserInput and Time in local storage 

