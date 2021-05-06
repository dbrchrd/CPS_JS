console.log('main.js is running');
const btn = document.querySelector("#btn");
var btn_info;
var btn_info_innerHTML;
var timer_duration;
console.log(btn);
console.log(btn_info);
var append_seconds = timer_duration;
var append_tens = 00;

btn.onclick = function startStop() {
  timer_duration = document.querySelector("#timer-input").value;
  Interval = setInterval(timer, 10);


  btn_info_innerHTML = "Click";
  append_seconds = timer_duration;
  console.log("Timer duration : " + timer_duration + " seconds");
  console.log(btn_info_innerHTML);

  timer();
}

function timer() {
  btn_info = document.querySelector("#btn-info");
  btn_info_innerHTML = document.querySelector("#btn-info").innerHTML;
  append_tens = append_tens - 1;

  document.querySelector("#sec").innerHTML = append_seconds;
  document.querySelector("#tens").innerHTML = append_tens;

  if (append_tens < 10) {
    document.querySelector("#tens").innerHTML = "0" + append_tens;
  }
  if (append_tens < 1) {
    append_seconds = append_seconds - 1;
    append_tens = 99;
  }
  if (append_seconds < 0) {
    append_seconds = 0;
    append_tens = 0;
    clearInterval(Interval);
  }
  
  if (append_seconds <= .3 * timer_duration - 1) {
    btn_info.style.color = "orange";
    btn_info.style.transition = ".4s";
  }
  if (append_seconds <= .1 * timer_duration - 1) {
    btn_info.style.color = "red";
    btn_info.style.transition = ".4s";
  }
  if (append_seconds > .3 * timer_duration - 1) {
    btn_info.style.color = "green";
  }

}

// function affTimer() {
//
// }
