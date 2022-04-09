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

let numField = 0;

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  ++numField;
  document.querySelector("#num").innerText = numField;
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  if (numField > 0) {
    --numField;
    document.querySelector("#num").innerHTML = numField;
  }
});

let cartEmpty = true;
function itemsInCart(param) {
    let emptyElement=document.createElement("div");
    emptyElement.classList.add("empty-card");
    emptyElement.innerText="Your cart is empty.";
    if (cartEmpty == true) {
        if(param==false){
            try {
                document.querySelector(".cart-content-container").appendChild(emptyElement);
                
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
                document.querySelector(".cart-content-container").remove(document.querySelectorAll(".empty-card"));
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}



const toggleCart = document.querySelector(".cart-container");
const cart = document.querySelector(".cart");
toggleCart.addEventListener("click", () => {
  if (cart.classList.contains("active")) {
    cart.classList.remove("active");
    itemsInCart(false);
  } else {
    cart.classList.add("active");
    itemsInCart(true);
  }
});



function addToCart() {}
