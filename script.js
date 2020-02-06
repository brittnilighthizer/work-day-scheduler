var hoursOfDay = moment().startOf("day").add(8, "hour");
for (var i=9; i<18; i++){
    var hours = hoursOfDay.add(1, "hour").format("hh:mm A");
    var newDiv = $("<div class='row time-block ' id='" + i + "'>");
    newDiv.append($("<div class='hour col-md-1 d-flex align-items-center' >" + hours + "</div>"));
    newDiv.append($("<textarea class='description col-md-10 d-flex align-items-center'> </textarea>"));
// appends the save button 
    newDiv.append($("<span class='saveBtn col-md-1 d-flex align-items-center' data-index='" + i + "'>" + "<i class='fas fa-save'></i>" + "</span>"));
    $(".container").append(newDiv);
    var localData = localStorage.getItem(i)
    // putting the value of user input into the textarea
    $($("textarea")[i-9]).val(localData);

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

$(".saveBtn").on("click", function() {

    //save button cooresponding to index
    var saveBtnClicked = $(this).attr("data-index");
    var indexOfButtonClicked = parseInt($(this).attr("data-index"));
    //user input 
    var userInput = $($("textarea")[indexOfButtonClicked-9]).val();
    localStorage.setItem(indexOfButtonClicked, userInput)
    var localData = localStorage.getItem(indexOfButtonClicked)
    // putting the value of user input into the textarea
    $($("textarea")[indexOfButtonClicked-9]).val(localData);

});

