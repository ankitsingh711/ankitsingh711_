//<----------- Typing Animation -------------->

var typed = new Typed(".typing", {
  strings: ["","Node Backend Developer", "YouTuber", "Dev..."],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Navbar Toggler Hide
const navToggler = document.querySelector(".nav-toggler");
if(window.innerWidth<=696){
    navToggler.classList.remove("hidden");
}else if(window.innerWidth>=696){
    navToggler.classList.add("hidden");
}

//<-------- Aside ----------->
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
(allSection = document.querySelectorAll(".section")),
  (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  // console.log(navList[i]);
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth<1200)
    {
        asideSectionTogglerBtn();
    }
  });
}
function showSection(elem) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = elem.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totoalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }
