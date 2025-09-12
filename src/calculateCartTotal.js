import { getCartDataFromLS } from "./getCartDataFromLS";

export const calculateCartTotal = (cartSection) => {
    if(cartSection){
        const treeCartTotalElem = cartSection.querySelector(".treeCartTotalElem");
        const treeSubTotal = cartSection.querySelector(".treeSubTotal");
        const treeTax = cartSection.querySelector(".treeTax");
        const treeFinalTotal = cartSection.querySelector(".treeFinalTotal");

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
    }
};