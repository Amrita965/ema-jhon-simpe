const addItemToLocalStorage = id => {
    let cart = getItemToLocalStorage();
    if (cart[id]) {
        cart[id] = cart[id] + 1;
    } else {
        cart[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

const removeItemFromLocalStorage = (id) => {
    const cart = getItemToLocalStorage();
    if (cart[id]) {
        delete cart[id];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

const getItemToLocalStorage = () => {
    let cart = {};
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        return cart;
    }
    return cart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
}

export { 
    addItemToLocalStorage, 
    removeItemFromLocalStorage, 
    getItemToLocalStorage,
    deleteShoppingCart
 };