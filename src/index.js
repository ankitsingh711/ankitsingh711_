const resume_btn = document.querySelector("#resume-button-2");
const resume_btn2 = document.querySelector("#resume-button-1");

resume_btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1O02_J76ogTkuPfvMFxv9Z4omK3mtfGWW/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/u/0/uc?id=1O02_J76ogTkuPfvMFxv9Z4omK3mtfGWW&export=download";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1O02_J76ogTkuPfvMFxv9Z4omK3mtfGWW/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/u/0/uc?id=1O02_J76ogTkuPfvMFxv9Z4omK3mtfGWW&export=download";
});

const design = document.querySelector("#designation");

const skills = ["Full Stack Web Developer", "YouTuber"];
let j = 0;
function changeTxt() {
  design.innerHTML = null;
  var txt = skills[j];
  if (j == skills.length - 1) {
    j = 0;
  } else {
    j++;
  }

  var i = 0;
  var speed = 100;

  function typeWriter() {
    if (i < txt.length) {
      design.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

setInterval(changeTxt, 3000);
