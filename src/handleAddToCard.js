import { getCartDataFromLS } from "./getCartDataFromLS";
import { setCartDataToLS } from "./setCartDataToLS";
import { showCartData } from "./showCartData";


export const handleAddToCard = async (targetCard, id, stock) => {

    const treeName = targetCard.querySelector(".card-title").textContent;
    let treePrice = targetCard.querySelector(".cardPrice").textContent;
    let treeQuantity = targetCard.querySelector(".treeQuantity").getAttribute("data-quantity");

    id = parseInt(id);
    treePrice = parseInt(treePrice.slice(1));
    treeQuantity = parseInt(treeQuantity);

    const cartsDataLS = getCartDataFromLS();
    const curTreeCart = cartsDataLS.find(curElem => curElem.id === id);

    if(curTreeCart){
        const totalQuantity = treeQuantity + curTreeCart.quantity;
        if(treeQuantity > 1 && totalQuantity <= stock){
            curTreeCart.quantity += treeQuantity;
        }
    }
    else{
        cartsDataLS.push({id: id, name: treeName, price: treePrice, quantity: treeQuantity});
    }

    setCartDataToLS(cartsDataLS);

    showCartData();
};