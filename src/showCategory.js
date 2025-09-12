import { getDataFromAPI } from "./getDataFromAPI";
import { showCategoryWiseTree } from "./showCategoryWiseTree";

const mobileCatSection = document.querySelector('#categorySection-m');
const mobileCatContainer = document.querySelector('#categoryContainer-m');
const categorySection = document.querySelector('#categorySection');
const categoryContainer = document.querySelector('#categoryContainer');
const categoryTemplate = document.querySelector('#categoryTemplate');

const mediaQuery = window.matchMedia("(min-width: 768px)");

export const showCategory = async () => {
    const barLoader = document.createElement('span');
    barLoader.className = "loading loading-bars loading-xl my-8";
    mobileCatContainer.innerHTML = "";
    categoryContainer.innerHTML = "";

    if(mediaQuery.matches){
        categorySection.insertBefore(barLoader, categoryContainer);
    }
    else{
        mobileCatSection.insertBefore(barLoader, mobileCatContainer);
    }

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
        if(mediaQuery.matches){
            categoryContainer.append(allTreesCat);
        }else{
            mobileCatContainer.append(allTreesCat);
        }

        allCategory.forEach(curCategory => {
            const cloneCategory = document.importNode(categoryTemplate.content, true);

            if(cloneCategory){
                const {id, category_name} = curCategory;
                const categoryElem = cloneCategory.querySelector('li');

                const slug = category_name.toLowerCase().split(" ").join('-') + `/${id}`;
                
                categoryElem.setAttribute('data-id', id);
                categoryElem.setAttribute('data-slug', slug);
                categoryElem.textContent = category_name;

                if(mediaQuery.matches){
                    categoryContainer.append(cloneCategory);
                }else{
                    mobileCatContainer.append(cloneCategory);
                }
            }
        });

        categoryContainer.addEventListener('click', (ev) => {
            
            if(mediaQuery.matches){
                showCategoryWiseTree(ev, categoryContainer);
            }else{
                showCategoryWiseTree(ev, mobileCatContainer);
            }
        });

        return true;
    }

    return false;
};