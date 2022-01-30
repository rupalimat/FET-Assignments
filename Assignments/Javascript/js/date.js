var d = new Date();
document.getElementById("date").innerHTML = d;
var hr = d.getHours();

if (hr >= 0 && hr < 12) {
    document.write("Good Morning!!!");
} else if (hr >= 12 && hr <= 17) {
    document.write("Good AfterNoon!!!");
} else {
    document.write("Good Evening!!!");
}
