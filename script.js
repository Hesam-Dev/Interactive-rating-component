"use strict";

const btnsEl = document.querySelectorAll(".btn");
const btnSubmitEl = document.querySelector(".btn-submit");
function remove() {
  btnsEl.forEach((el) => el.classList.remove("active"));
}
btnsEl.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    remove();
    btn.classList.add("active");
  });
});
btnSubmitEl.addEventListener("click", function () {
  let rate = 0;
  btnsEl.forEach((el) => {
    if (el.classList.contains("active")) {
      rate = el.textContent;
    }
  });
  document.querySelector(".rate").textContent = rate;
  document.querySelector(".card1").classList.add("hidden");
  document.querySelector(".card2").classList.remove("hidden");
});
