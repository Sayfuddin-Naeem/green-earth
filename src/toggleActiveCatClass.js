
export const toggleActiveCatClass = (curCategory, categoryContainer) => {
    if(curCategory){
        const allCatList = categoryContainer.querySelectorAll('li');
        
        allCatList.forEach(curList => {
            curList.classList.remove("active-category");
        });

        curCategory.classList.add("active-category");
        return true;
    }

    return false;
};