document.addEventListener("DOMContentLoaded", function () {
  paragraph = document.getElementById("lorem");
  button = document.getElementById("highlightBtn");

  button.addEventListener("click", function () {
    paragraph.classList.toggle("highlight");
  });
});
