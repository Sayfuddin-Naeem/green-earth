import { getCartDataFromLS } from "./getCartDataFromLS";

const treeCartTotalElem = document.querySelector(".treeCartTotalElem");
const treeSubTotal = document.querySelector("#treeSubTotal");
const treeTax = document.querySelector("#treeTax");
const treeFinalTotal = document.querySelector("#treeFinalTotal");

export const calculateCartTotal = () => {
    const cartsDataLS = getCartDataFromLS();

    if(cartsDataLS.length > 0){
        const subTotal = cartsDataLS.reduce((acc, curElem) => {
            return acc + curElem.price * curElem.quantity;
        }, 0);

        const tax = parseInt(treeTax.textContent.slice(1));
        treeSubTotal.textContent = `৳${subTotal}`;
        treeFinalTotal.textContent = `৳${subTotal + tax}`;

        treeCartTotalElem.classList.remove("hidden");
    }
    else{
        treeCartTotalElem.classList.add("hidden");
    }
};