var hoursOfDay = moment().startOf("day").add(8, "hour");
for (var i=9; i<18; i++){
    var hours = hoursOfDay.add(1, "hour").format("hh:mm A");
    var newDiv = "<div class='row time-block' id='" + i + "'>";
    $(".container").append(newDiv);
    $(".container").append("<div class='hour col-md-1' >" + hours + "</div>");
    $(".container").append("<textarea class='description col-md-10'> </textarea>");
    $(".container").append("<span class='saveBtn col-md-1'>" + "<i class='fas fa-save'></i>" + "</span>");

    console.log(hours);
};

$(document).ready(function() {
    $(".time-block").each(function(){
    var time = parseInt($(this).attr("id"));
    console.log(time);
    let currentHr = moment().hour();
    console.log(currentHr);

    if (currentHr === time){
        $(this).addClass("present");
    }

    if (currentHr > time){
        $(this).addClass("past");
    }

    else if (currentHr < time){
        $(this).addClass("future");
    }
});
});




// let currentDate = moment().format("MMM Do YY"); 
// currentDate.format();


// });
// //from office hours
// $("button").on("click", function() {
//     console.log($(this).attr("data-index"))
//     var indexOfButtonClicked = parseInt($(this).attr("data-index"));
//     console.log($($("input")[indexOfButtonClicked]).val());
// })