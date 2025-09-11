import { handleAddToCard } from "./handleAddToCard";
import { handleTreeQuantity } from "./handleTreeQuantity";
import { showTreeDetailsModal } from "./showTreeDetailsModal";


export const handleTreeCardEvents = (ev, id, stock) => {
    const targetClass = ev.target.classList[0];
    const targetCard = document.querySelector(`#treeCard-${id}`);

    if(targetCard && targetClass){
        if(targetClass === "card-title"){
            showTreeDetailsModal(id);
        }

        else if(targetClass === "quantityIncrement" || targetClass === "quantityDecrement"){
            handleTreeQuantity(targetClass, targetCard, stock);
        }

        else if(targetClass === "addToCardBtn"){
            handleAddToCard(targetCard, id, stock);
        }
    }
};