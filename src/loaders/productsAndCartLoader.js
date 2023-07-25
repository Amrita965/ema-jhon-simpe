import { getItemToLocalStorage } from "../utilities/fakedb";

export const productsAndCartLoader = async() => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    const savedCart = getItemToLocalStorage();
    const previousCart = [];
    for(const id in savedCart) {
        const addedProduct = products.find(product => product.id ===  id);
        if(addedProduct) {
            addedProduct.quantity = savedCart[id];
            previousCart.push(addedProduct);
        }
    }


    return {products, previousCart};
}