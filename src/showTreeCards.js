import { getDataFromAPI } from "./getDataFromAPI";
import { handleTreeCardEvents } from "./handleTreeCardEvents";

const treeSection = document.querySelector('#treeSection');
const cardContainer = document.querySelector('#cardContainer');
const cardTemplate = document.querySelector('#cardTemplate');

export const showTreeCard = async () => {
    const dotLoader = document.createElement('span');
    dotLoader.className = "loading loading-dots loading-xl my-8";
    cardContainer.innerHTML = "";
    treeSection.insertBefore(dotLoader, cardContainer);


    const apiUrl = "https://openapi.programming-hero.com/api/plants";
    const apiData = await getDataFromAPI(apiUrl);
    const allTree = apiData.plants;

    if(allTree){
        allTree.forEach(curTree => {
            const treeCard = document.importNode(cardTemplate.content, true);
            
            if(treeCard){
                const {id, image, name, description, category, price} = curTree;

                const curCard = treeCard.querySelector('#cardValue');

                curCard.setAttribute('id', `treeCard-${id}`);
                curCard.addEventListener('click', (ev) => {
                    handleTreeCardEvents(ev, id);
                });

                treeCard.querySelector('.cardImage').src = image;
                treeCard.querySelector('.cardImage').alt = name;
                treeCard.querySelector('.card-title').textContent = name;
                treeCard.querySelector('.cardDescription').textContent = description;
                treeCard.querySelector('.cardCategory').textContent = category;
                treeCard.querySelector('.cardPrice').textContent = `৳${price}`;

                dotLoader.remove();
                cardContainer.append(treeCard);
            }
        });
    }
};