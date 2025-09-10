import { getDataFromAPI } from "./getDataFromAPI";

export const showTreeDetailsModal = async (treeId) => {
    const apiUrl = `https://openapi.programming-hero.com/api/plant/${treeId}`;
    const apiData = await getDataFromAPI(apiUrl);
    const tree = apiData.plants;

    // console.log(tree, treeId);

    
    if(tree){
        const {id, image, name, description, category, price} = tree;
        const treeModal = document.querySelector('#treeDetails');

        treeModal.querySelector('#modalTitle').textContent = name;
        treeModal.querySelector('#modalImage').src = image;
        treeModal.querySelector('#modalImage').alt = name;
        treeModal.querySelector('#modalCategory').textContent = category;
        treeModal.querySelector('#modalPrice').textContent = price;
        treeModal.querySelector('#modalDescription').textContent = description;

        treeModal.showModal();
    }
};