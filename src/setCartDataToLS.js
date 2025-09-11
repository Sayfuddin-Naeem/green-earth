
export const setCartDataToLS = (data) => {
    if(Array.isArray(data) === false){
        throw new TypeError(`${data} is not an array!! Give a valid array.`);
    }

    localStorage.setItem("greenEarthCarts", JSON.stringify(data));

    return true;
};