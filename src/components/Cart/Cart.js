import React, { Children } from 'react';
import './Cart.css';
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/solid';
import calculateCart from '../../utilities/calculate';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, handleToClearCart, children }) => {
    console.log(Children);
    const {totalPrice, totalProduct, taxAmount, totalAmount, totalShippingCost} = calculateCart(cart);
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Item: {totalProduct}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShippingCost}</p>
            <p>Tax: ${taxAmount}</p>
            <h3>Grand Total: ${totalAmount}</h3>
            <button onClick={handleToClearCart} className="btn clear-cart-btn">Clear Cart <TrashIcon className="trash-icon icon" /></button>
            {children}
        </div>
    );
};

export default Cart;