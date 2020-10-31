var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById('small-time').innerHTML = time;
document.getElementById('big-time').innerHTML = time;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
var dayNames = days[new Date().getDay()];
document.getElementById('day-name').innerHTML = dayNames;