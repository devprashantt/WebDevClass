let x = 5;
let y = 2;
let z = x * y;
let sum = x + y;
document.getElementById("operators").innerHTML = " 5*2 = "+z;
document.getElementById("sum").innerHTML = " 5 + 2 = "+sum;

let hour = new Date().getHours();
let greeting;

if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day , Its Around" + hour;
} else {
  greeting ="Good evening";
}

document.getElementById("time").innerHTML = greeting;