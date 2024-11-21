const $ = (selector) => {
  return document.querySelector(selector);
};

const hour = $(".hour");
const dot = $(".dot");
const minute = $(".minute");
const week = $(".week");
let showDot = true;

function update() {
  showDot = !showDot;
  const now = new Date();

  if (showDot) {
    dot.classList.add("invisible");
  } else {
    dot.classList.remove("invisible");
  }

  // Use String() instead of string(), and padStart() instead of padstart()
  hour.textContent = String(now.getHours()).padStart(2, "0");
  minute.textContent = String(now.getMinutes()).padStart(2, "0");

  Array.from(week.children).forEach((ele) => {
    ele.classList.remove("active");
  });

  // Fix the index for getDay() since it returns a number from 0 to 6
  week.children[now.getDay()].classList.add("active");
}

setInterval(update, 500);
