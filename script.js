// harder; makes it dynamic -- eek
var hoursOfDay = moment().startOf("day").add(9, "hour");
for (var i=9; i<17; i++){
    var hours = hoursOfDay.add(1, "hour").format("hh:mm A");
};

$(document).ready(function(){

    $("#hour-by-hour").append(hours);

});
// // use this for sure
// let currentHr = moment().hour();
// let currentDate = moment().format("MMM Do YY"); 

// currentDate.format();
//INPUT FIELD AND SAVE BUTTON    
//   to add a new appointment / item to scheduler

//save button saves to LOCAL STORAGE