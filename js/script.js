const toggleBtn=document.querySelector(".hide-show-menu-container");
const hideShow=document.querySelector(".hide-show");
const tglMenuWrapper=document.querySelector(".toggle-menu-wrapper");
const toggleMenu=document.querySelector(".toggle-menu")
toggleBtn.addEventListener("click",()=>{
    if (toggleBtn.classList.contains("active")) {        
        hideShow.classList.remove("active")
        toggleBtn.classList.remove("active")
        tglMenuWrapper.classList.remove("active")
        toggleMenu.classList.remove("active")
    } else {  
        hideShow.classList.add("active")
        toggleBtn.classList.add("active")
        tglMenuWrapper.classList.add("active")
        toggleMenu.classList.add("active")
    }

    
})
