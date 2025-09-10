
export const setCategorySlug = (catSlug) => {
     // Update URL without reload
    history.pushState({ category: catSlug }, "", `/category/${catSlug}`);
};