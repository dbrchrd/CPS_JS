console.log('main.js is running');
const qs = (elPath) => {
  return document.querySelector(elPath);
}
const show = (bool, elPath) => {
  if (bool === 0) {
    elPath.style.display = "none";
  } else if (bool === 1) {
    elPath.style.display = "flex";
  }
  return elPath, bool;
}
const btn_start = qs("#btn-start"), btn_click = qs("#btn-click"), btn_fin = qs("#btn-fin"), btn_retry = qs("#retry");

var btn_info, btn_info_innerHTML, timer_duration, append_seconds = timer_duration, append_tens = 00, count = 0, tens;
const start = () => {
  Interval = setInterval(timer, 10);
  count++;
  timer_duration = qs("#timer-input").value;
  btn_info_innerHTML = "Click";
  append_seconds = timer_duration;
  console.log("Timer duration : " + timer_duration + " seconds");
  btn_start.style.display = "none";
  btn_click.style.display = "flex";
  btn_fin.style.display = "none";
  timer();
}

const retry = () => {
  btn_start.style.display = "flex";
  btn_click.style.display = "none";
  btn_fin.style.display = "none";
}
btn_start.onclick = () => {
  start();
}
btn_click.onclick = () => {
  count++;
  console.log(count);
}
btn_retry.onclick = () => {
  retry();
}
const timer = () => {

  btn_info = qs(".btn-info");
  btn_info_innerHTML = qs(".btn-info").innerHTML;
  append_tens = append_tens - 1;

  qs("#sec").innerHTML = append_seconds;
  qs("#tens").innerHTML = append_tens;

  if (append_tens < 10) {
    qs("#tens").innerHTML = "0" + append_tens;
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
    if (tens == "0-1") {
      qs("#tens").innerText = "00";
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
