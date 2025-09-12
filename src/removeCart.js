import { calculateCartTotal } from "./calculateCartTotal";
import { getCartDataFromLS } from "./getCartDataFromLS";
import { setCartDataToLS } from "./setCartDataToLS";

export const removeCart = (ev, id, cartSection) => {
    const targetCartElem = document.querySelector(`#treeCart-${id}`);
    let cartDataLS = getCartDataFromLS();

    if(cartDataLS && targetCartElem){
        cartDataLS = cartDataLS.filter(curElem => curElem.id !== id);
        setCartDataToLS(cartDataLS);

        targetCartElem.remove();
        calculateCartTotal(cartSection);
        
        return true;
    }
    return false;
};