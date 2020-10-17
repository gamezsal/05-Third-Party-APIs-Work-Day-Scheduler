
//Initialize 
var workDayPlanner = [];

//Loop and create array
for(i = 0; i <= 17; i++) {
    var timeDay = i -9;
    var dPlanner = "";
    var dHour = 0;
    var ampm = "";

    if(i === 12) {
        dHour = 12;
        ampm = "pm";
    }else if (i > 12){
        dHour = i - 12;
        ampm = "pm"
    }else if (i > 12){
        dHour = i;
        ampm = "am";
    }
    dHour = dHour.toString()

    var dPlanner = {
        // id: id,
        dHour: dHour,
        // time: time,
        ampm: ampm,
        dPlanner: dPlanner
    }
    workDayPlanner.push(dPlanner)

}
//Header
function currentDate(){
    var cDate = moment().format('dddd, MMM Do');
    $("#currentDay").text(cDate);
}

// localStorage Data
function setPlannerInfo() {
    dPlanner.forEach(function (hour) {
        $("#" + hour.id).val(hour.dPlanner)
        
    });
};