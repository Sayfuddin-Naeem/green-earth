import { getDataFromAPI } from "./getDataFromAPI";
import { showCategoryWiseTree } from "./showCategoryWiseTree";

const categorySection = document.querySelector('#categorySection');
const categoryContainer = document.querySelector('#categoryContainer');
const categoryTemplate = document.querySelector('#categoryTemplate');

export const showCategory = async () => {
    const barLoader = document.createElement('span');
    barLoader.className = "loading loading-bars loading-xl my-8";
    categoryContainer.innerHTML = "";
    categorySection.insertBefore(barLoader, categoryContainer);

    const apiUrl = "https://openapi.programming-hero.com/api/categories";
    const apiData = await getDataFromAPI(apiUrl);
    const allCategory = apiData.categories;

    if(allCategory){
        const allTreesCat = document.importNode(categoryTemplate.content, true).querySelector('li');
        allTreesCat.classList.add("active-category");
        allTreesCat.setAttribute('data-id', '0');
        allTreesCat.setAttribute('data-slug', 'all-trees/0');
        allTreesCat.textContent = "All Trees";


        barLoader.remove();
        categoryContainer.append(allTreesCat);

        allCategory.forEach(curCategory => {
            const cloneCategory = document.importNode(categoryTemplate.content, true);

            if(cloneCategory){
                const {id, category_name} = curCategory;
                const categoryElem = cloneCategory.querySelector('li');

                const slug = category_name.toLowerCase().split(" ").join('-') + `/${id}`;
                
                categoryElem.setAttribute('data-id', id);
                categoryElem.setAttribute('data-slug', slug);
                categoryElem.textContent = category_name;

                categoryContainer.append(cloneCategory);
            }
        });

        categoryContainer.addEventListener('click', (ev) => {
            showCategoryWiseTree(ev, categoryContainer);
        });

        return true;
    }

    return false;
};