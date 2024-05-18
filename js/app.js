var elModeBtn = document.querySelector(".header-top__mode-btn")
var elLogoImg = document.querySelector(".site-logo")

elModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("mode")
    
    if(document.body.classList == "mode"){
        elLogoImg.setAttribute("src", "./images/logo-white.svg")
    }
    else{
        elLogoImg.setAttribute("src", "./images/logo.svg")
    }
})
