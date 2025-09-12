import { calculateCartTotal } from "./calculateCartTotal";
import { getCartDataFromLS } from "./getCartDataFromLS";
import { removeCart } from "./removeCart";

const mobileCartSection = document.querySelector("#cartSection-m");
const mobileCartElemContainer = document.querySelector("#cartElemContainer-m");
const cartSection = document.querySelector("#cartSection");
const cartElemContainer = document.querySelector("#cartElemContainer");
const cartElemTemplate = document.querySelector("#cartElemTemplate");

const mediaQuery = window.matchMedia("(min-width: 768px)");

export const showCartData = () => {
    const spinLoader = document.createElement('span');
    spinLoader.className = "loading loading-spinner loading-xl my-8";
    cartElemContainer.innerHTML = "";
    mobileCartElemContainer.innerHTML = "";

    if(mediaQuery.matches){
        cartSection.insertBefore(spinLoader, cartElemContainer);
    }
    else{
        mobileCartSection.insertBefore(spinLoader, mobileCartElemContainer);
    }

    const cartsDataLS = getCartDataFromLS();

    if(cartsDataLS.length > 0){

        cartsDataLS.forEach(curCart => {
            const cloneCartElem = document.importNode(cartElemTemplate.content, true);
            const {id, name, price, quantity} = curCart;

            if(cloneCartElem){
                cloneCartElem.querySelector("#cartElemValue").setAttribute("id", `treeCart-${id}`);;

                cloneCartElem.querySelector(".treeTitle").textContent = name;
                cloneCartElem.querySelector(".cartElemPrice").textContent = price;
                cloneCartElem.querySelector(".cartElemQuantity").textContent = quantity;

                cloneCartElem.querySelector(".cartElemClose").addEventListener("click", (ev) => {
                    if(mediaQuery.matches){
                        removeCart(ev, id, cartSection);
                    }
                    else{
                        removeCart(ev, id, mobileCartSection);
                    }
                });

                spinLoader.remove();
                
                if(mediaQuery.matches){
                    cartElemContainer.append(cloneCartElem);
                }else{
                    mobileCartElemContainer.append(cloneCartElem);
                }
            }
        });

        if(mediaQuery.matches){
            calculateCartTotal(cartSection);
        }else{
            calculateCartTotal(mobileCartSection);
        }

        return true;
    }
    
    spinLoader.remove();
    return false;
};