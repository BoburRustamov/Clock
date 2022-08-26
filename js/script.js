let tabs = document.querySelectorAll(".tabsItem");
let contents = document.querySelectorAll(".tabsContentItem ");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
      contents[j].classList.remove("active");
      tabs[i].classList.add("active");
      contents[i].classList.add("active");
    }
  });
}

/////////////////////////////////////

function clock() {
  let second = document.querySelector(".s");
  let minute = document.querySelector(".m");
  let hour = document.querySelector(".h");
  let hourNum = document.querySelector(".hours");
  let minutesNum = document.querySelector(".minutes");

  let time = new Date();
  let s = time.getSeconds() * 6;
  let m = time.getMinutes() * 6;
  let h = time.getHours() * 30;

  second.style.transform = `rotate(${s}deg)`;
  minute.style.transform = `rotate(${m}deg)`;
  hour.style.transform = `rotate(${h}deg)`;

  hourNum.innerText =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  hourNum.innerText =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minutesNum.innerText =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  setTimeout(() => {
    clock();
  }, 1000);
}
clock();





//////////////////
///////////
//////
// StopWatch

let sec = document.querySelector(".stopwatch__seconds");
let min = document.querySelector(".stopwatch__minutes");
let hrs = document.querySelector(".stopwatch__hours");
let point = document.querySelector('.tabsLink__span');
let start_btn = document.querySelector('.stopwatch__btn');
let second2 = 0;
var startstop = 0;
let something;

function stopWatch() {
  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    start_btn.innerHTML = "Stop";
    point.classList.add("active")

  } else if (startstop === 2) {
    point.classList.add("active_clear")
    start_btn.innerHTML = "Reset";
    stop();
  } else if (startstop === 3) {
    start_btn.innerHTML = "Start";
    point.classList.remove("active_clear", "active")
    startstop = 0;
    reset();
  }
}
function timer() {
  second2++;
  let hrs2 = Math.floor(second2 / 3600);
  let min2 = Math.floor((second2 - hrs2 * 3600) / 60);
  let sec2 = second2 % 60;

  // 1) way
  // hrs.innerText = hrs2;
  // min.innerText = min2;
  // sec.innerText = sec2;  

  // 2) Way
  hrs.innerText = hrs2 < 10 ? "0" + hrs2 : hrs2;
  min.innerText = min2 < 10 ? "0" + min2 : min2;
  sec.innerText = sec2 < 10 ? "0" + sec2 : sec2;
}
function start() {
  something = setInterval(timer, 1000);
}
function stop() {
  clearInterval(something);
}
function reset() {
  hrs.innerHTML = "0";
  min.innerHTML = "0";
  sec.innerHTML = "0";
  second2 = 0;
}



