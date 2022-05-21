//* moment().format("dddd, MMMM Do YYYY, h:mm:ss a") moment.js code*//

moment(currentDay);
$("#currentDay").text(moment().format("dddd, MMMMM Do YYYY, h:mm a"));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf("day").add(9, "hours");

//* var time for the hours of 9am - 5pm *//

//9am
var time1 = beforeTime.add(0, "h");
time1 = time1.format("hh:mm A");
$(".block1").text(time1);

//10am
var time2 = beforeTime.add(1, "h");
time2 = time2.format("hh:mm A");
$(".block2").text(time2);

//11am
var time3 = beforeTime.add(1, "h");
time3 = time3.format("hh:mm A");
$(".block3").text(time3);

//12pm
var time4 = beforeTime.add(1, "h");
time4 = time4.format("hh:mm A");
$(".block4").text(time4);

//1pm
var time5 = beforeTime.add(1, "h");
time5 = time5.format("hh:mm A");
$(".block5").text(time5);

//2pm
var time6 = beforeTime.add(1, "h");
time6 = time6.format("hh:mm A");
$(".block6").text(time6);

//3pm
var time7 = beforeTime.add(1, "h");
time7 = time7.format("hh:mm A");
$(".block7").text(time7);

//4pm
var time8 = beforeTime.add(1, "h");
time8 = time8.format("hh:mm A");
$(".block8").text(time8);

//5pm
var time9 = beforeTime.add(1, "h");
time9 = time9.format("hh:mm A");
$(".block9").text(time9);

//* add colors to correspond to conditional statement which affect timeblock *//

function testTime(){

//* time1 / form9 = 9am *//
    time1 = moment().startOf("day").add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isPresent(time1)) {
        $(".form9").addClass("present");
    }
    else if (currentTime.isFuturet(time1)) {
        $(".form9").addClass("future");
    };

//* time2 / form10 = 10am *//
    time2 = moment().startOf("day").add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isPresent(time2)) {
        $(".form10").addClass("present");
    }
    else if (currentTime.isFuturet(time2)) {
        $(".form10").addClass("future");
    };

//* time3 / form11 = 11am *//
    time3 = moment().startOf("day").add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isPresent(time3)) {
        $(".form11").addClass("present");
    }
    else if (currentTime.isFuturet(time3)) {
        $(".form11").addClass("future");
    };
 
//* time4 / form12 = 12pm *//
    time4 = moment().startOf("day").add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isPresent(time4)) {
        $(".form12").addClass("present");
    }
    else if (currentTime.isFuturet(time4)) {
        $(".form12").addClass("future");
    };

//* time5 / form1 = 1pm *//
    time5 = moment().startOf("day").add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isPresent(time5)) {
        $(".form1").addClass("present");
    }
    else if (currentTime.isFuturet(time5)) {
        $(".form1").addClass("future");
    };

//* time6 / form2 = 2pm *//
    time6 = moment().startOf("day").add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isPresent(time6)) {
        $(".form2").addClass("present");
    }
    else if (currentTime.isFuturet(time6)) {
        $(".form2").addClass("future");
    };

//* time7 / form3 = 3pm *//
    time7 = moment().startOf("day").add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isPresent(time7)) {
        $(".form3").addClass("present");
    }
    else if (currentTime.isFuturet(time7)) {
        $(".form3").addClass("future");
    };

//* time8 / form4 = 4pm *//
    time8 = moment().startOf("day").add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isPresent(time8)) {
        $(".form4").addClass("present");
    }
    else if (currentTime.isFuturet(time8)) {
        $(".form4").addClass("future");
    };

//* time9 / form5 = 5pm *//
    time9 = moment().startOf("day").add(17, "hours");
    currentTime = currentTime.startOf("hour");
    if(currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isPresent(time9)) {
        $(".form5").addClass("present");
    }
    else if (currentTime.isFuturet(time9)) {
        $(".form5").addClass("future");
    };
}
testTime();

var x = [9,10,11,12,1,2,3,4,5];

for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}

//* Local Storage *//

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

