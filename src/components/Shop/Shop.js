import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/solid';
import Cart from '../Cart/Cart';
import { addItemToLocalStorage, deleteShoppingCart, getItemToLocalStorage } from '../../utilities/fakedb';
import { ShopContext } from '../../App';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Shop = () => {
    const { cartState, storedCart } = useContext(ShopContext);
    const navigate = useNavigate();
    const [isOpenCartSection, setOpenCartSection] = cartState;
    console.log(isOpenCartSection);
    const [cart, setCart] = storedCart;
   
    const products = useLoaderData();

    useEffect(() => {
        const storedCart = getItemToLocalStorage();
        const searchProducts = products.filter(product => {
            for (const storedProductId in storedCart) {
                if (product.id === storedProductId) {
                    product.quantity = storedCart[storedProductId];
                    return product;
                }
            }
        });
        setCart(searchProducts);
    }, []);

    const handleAddToCart = (selectedProduct) => {
        addItemToLocalStorage(selectedProduct.id);
        const searchProduct = cart.find(product => {
            if (product.id === selectedProduct.id) {
                return product;
            }
        });
        if (searchProduct) {
            searchProduct.quantity = searchProduct.quantity + 1;
            setCart([...cart]);
        } else {
            selectedProduct.quantity = 1;
            setCart([...cart, selectedProduct]);
        }
    }

    const handleToClearCart = () => {
        deleteShoppingCart();
        setCart([]);
    }

    const handleReviewItem = () => {
        navigate('/orders');
    }

    return (
        <div className="shop">
            <div onClick={() => isOpenCartSection ? setOpenCartSection(!isOpenCartSection) : null} className="products">
                {
                    products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div style={{ left: isOpenCartSection ? "0px" : "-300px" }} className="cart">
                <Cart handleToClearCart={handleToClearCart} cart={cart}><button onClick={handleReviewItem} className="btn review-order-btn">Review Order <ArrowRightIcon className="arrow-right-icon icon" /></button></Cart>
            </div>
        </div>
    );
};

export default Shop;
