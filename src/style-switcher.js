// <---------- Toggle Style Switcher -------------> 

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// <---------- Hide style-switcher on scroll -------------->

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})


// <--------------------- Theme Colors -------------------> 

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color===styleSwitcherToggle.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else 
        {
            style.removeAttribute("disabled", "true");
        }
    })
}

// <---------------- Theme light and dark mode --------------------> 

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon")
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else 
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})