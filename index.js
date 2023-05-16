function showOption() {
  var x = document.getElementById("language-option");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});
