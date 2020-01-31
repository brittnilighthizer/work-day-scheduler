// harder; makes it dynamic -- eek
var momentObj = moment().startOf("day").add(9, "hour");
for (var i=9; i<17; i++){
    console.log(momentObj.add(1, "hour").format("hh:mm A"))
}

// use this for sure
let currentHr = moment().hour();

    