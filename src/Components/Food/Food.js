import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Food.css'

const Food = ({ food, nameShow }) => {
    const { strMeal, strMealThumb } = food
    return (
        <div className='cart'>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strMeal}</h2>
            <div className='btn'>
                <p onClick={() => nameShow(strMeal)}>Name</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Food;