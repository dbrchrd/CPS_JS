console.log('main.js is running');
var tens;
const btn_start = document.querySelector("#btn-start");
const btn_click = document.querySelector("#btn-click");
const btn_fin = document.querySelector("#btn-fin");
const btn_retry = document.querySelector("#retry");

var btn_info;
var btn_info_innerHTML;
var timer_duration;
var append_seconds = timer_duration;
var append_tens = 00;
var count = 0;

btn_start.onclick = function startStop() {
  Interval = setInterval(timer, 10);
  count++;
  timer_duration = document.querySelector("#timer-input").value;
  btn_info_innerHTML = "Click";
  append_seconds = timer_duration;
  console.log("Timer duration : " + timer_duration + " seconds");
  btn_start.style.display = "none";
  btn_click.style.display = "flex";
  btn_fin.style.display = "none";
  timer();
}
btn_click.onclick = function clicks() {
  count++;
  console.log(count);
}
btn_retry.onclick = function retry() {
  btn_start.style.display = "flex";
  btn_click.style.display = "none";
  btn_fin.style.display = "none";
}
function timer() {

  btn_info = document.querySelector(".btn-info");
  btn_info_innerHTML = document.querySelector(".btn-info").innerHTML;
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
    clearInterval(Interval);
    append_seconds = 0;
    append_tens = 0;

    btn_start.style.display = "none";
    btn_click.style.display = "none";
    btn_fin.style.display = "flex";
    if (count < 2) {
      document.querySelector(".some-clicks").innerHTML = "";
    } else {
      document.querySelector(".some-clicks").innerHTML = "s";
    }
    document.querySelector("#fin-clicks-display").innerHTML = count;
    document.querySelector("#fin-time-display").innerHTML = timer_duration + " s";
    document.querySelector("#fin-cps-display").innerHTML = (count / timer_duration).toFixed(2);
    count = 0;
    tens = document.querySelector("#tens").innerText;
    if (tens == "0-1") {
      document.querySelector("#tens").innerText = "00";
    }
  }

  if (append_seconds <= .3 * timer_duration - 1) {
    btn_info.style.color = "#FF9B00";
    btn_info.style.transition = ".4s";
  }
  if (append_seconds <= .1 * timer_duration - 1) {
    btn_info.style.color = "#FF1919";
    btn_info.style.transition = ".4s";
  }
  if (append_seconds > .3 * timer_duration - 1) {
    btn_info.style.color = "#37FF37";
  }

}
