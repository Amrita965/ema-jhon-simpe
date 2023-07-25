import React, { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { ShopContext } from '../../App';
import styles from './Orders.module.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeItemFromLocalStorage } from '../../utilities/fakedb';
import { productsAndCartLoader } from '../../loaders/productsAndCartLoader';

const Orders = () => {

    const { cartState, storedCart } = useContext(ShopContext);
    const [cart, setCart] = storedCart;
    const [isOpenCartSection] = cartState;

    if(!cart.length){
        productsAndCartLoader()
            .then((result) => {
                const { previousCart } = result;
                setCart(previousCart);
            });
    }

    const handleRemoveCart = (productId) => {
        const restCartProducts = cart.filter(product => product.id !== productId);
        setCart(restCartProducts);
        removeItemFromLocalStorage(productId);
    }

    const handleToClearCart = () => {
        deleteShoppingCart();
        setCart([]);
    }
    
    return (
        <div className="shop">
            <div className={styles.products}>
                {
                    cart.map(product => <ReviewItem handleRemoveCart={handleRemoveCart} key={product.id} product={product} />)
                }
            </div>
            <div style={{ left: isOpenCartSection ? "0px" : "-300px" }} className="cart">
                <Cart handleToClearCart={handleToClearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;