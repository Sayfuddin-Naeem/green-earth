
export const handleTreeQuantity = (targetClass, targetCard, stock) => {
    const treeQuantity = targetCard.querySelector(".treeQuantity");

    let quantity = parseInt(treeQuantity.getAttribute("data-quantity"));

    if(targetClass === "quantityIncrement"){
        if(quantity < stock){
            quantity++;
        }
    }
    else if(targetClass === "quantityDecrement"){
        if(quantity > 1){
            quantity--;
        }
    }

    treeQuantity.textContent = quantity;
    treeQuantity.setAttribute("data-quantity", quantity);

    return quantity;
};