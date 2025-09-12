import { calculateCartTotal } from "./calculateCartTotal";
import { getCartDataFromLS } from "./getCartDataFromLS";
import { removeCart } from "./removeCart";

const cartSection = document.querySelector("#cartSection");
const cartElemContainer = document.querySelector("#cartElemContainer");
const cartElemTemplate = document.querySelector("#cartElemTemplate");

export const showCartData = () => {
    const spinLoader = document.createElement('span');
    spinLoader.className = "loading loading-spinner loading-xl my-8";
    cartElemContainer.innerHTML = "";
    cartSection.insertBefore(spinLoader, cartElemContainer);

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
                    removeCart(ev, id);
                });

                spinLoader.remove();
                cartElemContainer.append(cloneCartElem);
            }
        });
        calculateCartTotal();

        return true;
    }
    
    spinLoader.remove();
    return false;
};