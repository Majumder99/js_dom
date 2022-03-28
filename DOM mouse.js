function myFunction() {
  alert("We are reloaded");
}
function myYellow(obj) {
  obj.style.backgroundColor = "yellow";
}
let x;
x = document.getElementById("btn").addEventListener("click", myFristFunction);
x = document.getElementById("btn").addEventListener("click", mySecondFunction);
function myFristFunction() {
  alert("First Function");
}
function mySecondFunction() {
  alert("Second Function");
}
let y = document.getElementById("demo");
y.addEventListener("mouseover", onObj);
y.addEventListener("mouseout", offObj);
// function onObj(obj) {
//   obj.innerHTML = "Thank you";
// }
// function offObj(obj) {
//   obj.innerHTML = "we out";
// }
function onObj() {
  y.innerHTML = "Thank you";
}
function offObj() {
  y.innerHTML = "We out";
}
