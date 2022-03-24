import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>The Meal DB</h1>
            </div>
            <div className='links'>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;