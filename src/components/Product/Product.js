import React from 'react';
import './Product.css';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Product = ({product, handleAddToCart}) => {
    const {name, price, ratings, seller, img} = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="specification">
                <h2>{name}</h2>
                <p className="price">Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
                <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">Add to Cart <ShoppingCartIcon className="cart-icon"/></button>
            </div>
        </div>
    );
};

export default Product;