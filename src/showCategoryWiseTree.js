import { setCategorySlug } from "./setCategorySlug";
import { showTreeCard } from "./showTreeCards";
import { toggleActiveCatClass } from "./toggleActiveCatClass";


export const showCategoryWiseTree = (ev, categoryContainer) => {
    const curCategory = ev.target;
    
    if(curCategory.classList[0] === 'category'){
        toggleActiveCatClass(curCategory, categoryContainer);

        const catId = curCategory.getAttribute('data-id');
        const catSlug = curCategory.getAttribute('data-slug');

        showTreeCard(catId);
    }
};