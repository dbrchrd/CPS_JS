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
