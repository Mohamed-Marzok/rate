let colors = document.querySelectorAll(".colors span");
let radioclr = document.querySelectorAll(".radioclr");
let board = document.querySelector(".board");
if (localStorage.getItem("color") !== "") {
  board.style.background = localStorage.getItem("color");
  board.style.boxShadow = `0 0 50px 2px ${localStorage.getItem("color")}`;
}

[...radioclr].forEach(function (el) {
  el.addEventListener("click", function () {
    [...radioclr].forEach(function (el) {
      el.closest("span").classList.remove("active");
    });
    if (el.checked) {
      el.closest("span").classList.add("active");
      let selectedColor = el
        .closest("span")
        .getAttribute("style")
        .match(/#\w+/);
      board.style.background = selectedColor;
      board.style.boxShadow = `0 0 50px 2px ${selectedColor}`;
      localStorage.setItem("color", selectedColor);
    }
  });
});
