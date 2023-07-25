const calculateCart = (cart) => {
    
    let totalPrice = 0;
    let totalProduct = 0;
    let totalShippingCost = 0;

    for (const product of cart) {
        totalProduct = totalProduct + product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
        if (product.quantity > 1) {
            totalPrice = totalPrice + (product.price * product.quantity);
            continue;
        }
        totalPrice = totalPrice + product.price;
    }

    const taxAmount = parseFloat((totalPrice * 0.10).toFixed(2));
    const totalAmount = parseFloat((totalPrice + totalShippingCost + taxAmount).toFixed(2));
    return {
        totalPrice: totalPrice,
        taxAmount: taxAmount,
        totalProduct: totalProduct,
        totalAmount: totalAmount,
        totalShippingCost: totalShippingCost,

    }
}

export default calculateCart;