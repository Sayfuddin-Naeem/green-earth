import { getDataFromAPI } from "./getDataFromAPI";

const categoryContainer = document.querySelector('#categoryContainer');
const categoryTemplate = document.querySelector('#categoryTemplate');

export const showCategory = async () => {
    const apiUrl = "https://openapi.programming-hero.com/api/categories";
    const apiData = await getDataFromAPI(apiUrl);
    const allCategory = apiData.categories;

    if(allCategory){
        allCategory.forEach(curCategory => {
            const cloneCategory = document.importNode(categoryTemplate.content, true);

            if(cloneCategory){
                const {id, category_name} = curCategory;
                const categoryElem = cloneCategory.querySelector('#catVal');
                
                categoryElem.setAttribute('id', `category-${id}`);
                categoryElem.textContent = category_name;

                categoryContainer.append(cloneCategory);
            }
        });

        categoryContainer.addEventListener('click', (ev) => {
            
        });

        return true;
    }

    return false;
};