// initial count
let count = 0;
// DOM Element
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("increase")) count++;
    if (classes.contains("decrease")) count--;
    if (classes.contains("reset")) count = 0;
    value.textContent = count;
  });
});
