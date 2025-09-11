
export const getCartDataFromLS = () => {
    const cartData = localStorage.getItem("greenEarthCarts");

    return cartData ? JSON.parse(cartData) : [];
};