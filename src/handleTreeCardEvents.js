import { showTreeDetailsModal } from "./showTreeDetailsModal";


export const handleTreeCardEvents = (ev, id) => {
    const targetClass = ev.target.classList[0];
    const targetCard = document.querySelector(`#treeCard-${id}`);

    if(targetCard && targetClass){
        if(targetClass === "card-title"){
            showTreeDetailsModal(id);
        }

        if(targetClass === ""){
            
        }
    }
};