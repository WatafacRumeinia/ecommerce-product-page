function menu() {
  const toggleBtn = document.querySelector(".hide-show-menu-container");
  const hideShow = document.querySelector(".hide-show");
  const tglMenuWrapper = document.querySelector(".toggle-menu-wrapper");
  const toggleMenu = document.querySelector(".toggle-menu");
  toggleBtn.addEventListener("click", () => {
    if (toggleBtn.classList.contains("active")) {
      hideShow.classList.remove("active");
      toggleBtn.classList.remove("active");
      tglMenuWrapper.classList.remove("active");
      toggleMenu.classList.remove("active");
    } else {
      hideShow.classList.add("active");
      toggleBtn.classList.add("active");
      tglMenuWrapper.classList.add("active");
      toggleMenu.classList.add("active");
    }
  });
}

let numField = 0;
function increment() {
  const plus = document.querySelector(".plus");
  plus.addEventListener("click", () => {
    numField++;
    document.querySelector("#num").innerText = numField;
  });
}

function decrement() {
  const minus = document.querySelector(".minus");
  minus.addEventListener("click", () => {
    if (numField > 0) {
      numField--;
      document.querySelector("#num").innerText = numField;
    }
  });
}

function cartToggle(){
    const cart=document.querySelector(".cart-container");
    cart.addEventListener("click",()=>{
        console.log("it workssss")
    })
}
