import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../App';

const Header = () => {
    const {total, cartState, navState} = useContext(ShopContext);

    const [isOpen, setOpen] = navState;
    const [isOpenCartSection, setOpenCartSection] = cartState;

    return (
        <nav className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className="nav-item" style={{ top: isOpen ? "65px" : "-300px" }}>
                <li className="icon-container">
                    <ShoppingCartIcon onClick={() => setOpenCartSection(!isOpenCartSection)} className="shopping-cart-icon" ></ShoppingCartIcon>
                    <div className="total-added-item">{total}</div>
                </li>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/inventory">Manage Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <div className="icon-container">
                <ShoppingCartIcon onClick={() => {setOpenCartSection(!isOpenCartSection)}} className="shopping-cart-icon" ></ShoppingCartIcon>
                <div className="total-added-item">{total}</div>
                {

                    isOpen ?
                        <XMarkIcon onClick={() => setOpen(!isOpen)} className="xmark-icon" />
                        :
                        <Bars3Icon onClick={() => setOpen(!isOpen)} className="bars3-icon" />
                }
            </div>
        </nav>
    );
};

export default Header;