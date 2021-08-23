const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
// jumbo.style.transition = "1s";

container.addEventListener("click", function (img) {
  //   alert("ok");
  //   Cek apakah nama kelasnya thumnail
  if (img.target.className == "thumb") {
    // const e = img.target.getAttribute("src");

    // jumbo.setAttribute("src", e);
    jumbo.src = img.target.src;
    jumbo.classList.toggle("fade");
    setTimeout(function () {
      jumbo.classList.toggle("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      //   if (whumb.classList.contains("active")) {
      //     // thumb.classList.remove("active");
      //   }
      thumb.className = "thumb";
    });
    img.target.classList.toggle("active");
  }
});
