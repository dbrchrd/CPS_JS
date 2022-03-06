console.log('main.js is running');
const qs = (elPath) => {
  return document.querySelector(elPath);
}
const show = (bool, elPath) => {
  (bool === 0) ? elPath.style.display = "none" : null;
  (bool === 1) ? elPath.style.display = "flex" : null;
  return elPath, bool;
}
const btn_start = qs("#btn-start"), btn_click = qs("#btn-click"), btn_fin = qs("#btn-fin"), btn_retry = qs("#retry");

let btn_info, btn_info_innerHTML, timer_duration, append_seconds = timer_duration, append_tens = 00, count = 0, tens;
const start = () => {
  Interval = setInterval(timer, 10);
  count++;
  timer_duration = qs("#timer-input").value;
  btn_info_innerHTML = "Click";
  append_seconds = timer_duration;
  console.log("Timer duration : " + timer_duration + " seconds");
  show(0, btn_start); show(1, btn_click); show(0, btn_fin);
  timer();
}
const retry = () => {
  show(1, btn_start); show(0, btn_click); show(0, btn_fin);
}

btn_start.onclick = () => start();
btn_click.onclick = () => {
  count++;
  console.log(count);
}
btn_retry.onclick = () => retry();
const timer = () => {

  btn_info = qs(".btn-info");
  btn_info_innerHTML = qs(".btn-info").innerHTML;
  append_tens = append_tens - 1;

  qs("#sec").innerHTML = append_seconds;
  qs("#tens").innerHTML = append_tens;

  (append_tens < 10) ? qs("#tens").innerHTML = "0" + append_tens : null;
  if (append_tens < 1) {
    append_seconds = append_seconds - 1;
    append_tens = 99;
  }
  if (append_seconds < 0) {
    clearInterval(Interval);
    append_seconds = 0;
    append_tens = 0;

    show(0, btn_start); show(0, btn_click); show(1, btn_fin);
    if (count < 2) {
      qs(".some-clicks").innerHTML = "";
    } else {
      qs(".some-clicks").innerHTML = "s";
    }
    qs("#timer").innerHTML = "Finished !";
    qs("#fin-clicks-display").innerHTML = count;
    qs("#fin-time-display").innerHTML = timer_duration + " s";
    qs("#fin-cps-display").innerHTML = (count / timer_duration).toFixed(2);
    count = 0;
    tens = qs("#tens").innerText;
    (tens == "0-1") ? qs("#tens").innerText = "00" : null;
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
