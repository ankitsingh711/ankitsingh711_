const resume_btn = document.querySelector("#resume-button-2");


resume_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://drive.google.com/file/d/1O02_J76ogTkuPfvMFxv9Z4omK3mtfGWW/view?usp=sharing");
    window.location.href = "https://drive.google.com/u/0/uc?id=1O02_J76ogTkuPfvMFxv9Z4omK3mtfGWW&export=download";
})