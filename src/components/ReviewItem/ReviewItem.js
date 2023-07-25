import React from 'react';
import styles from './ReviewItem.module.css';
import { TrashIcon } from '@heroicons/react/24/solid';

const ReviewItem = ({ product, handleRemoveCart }) => {
    const { id, name, img, price, shipping, quantity } = product;
    return (
        <div className={styles.product}>
            <div>
                <img className={styles.productImg} src={img} alt="" />
            </div>
            <div className={styles.productDetails}>
                <div>
                    <h3 className={styles.productName}>{name}</h3>
                    <p><small>Price: <span>${price}</span></small></p>
                    <p><small>Shipping Charge: <span>${shipping}</span></small></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <button onClick={() => handleRemoveCart(id)} className={styles.trashIconContainer}>
                    <TrashIcon className={styles.trash} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;