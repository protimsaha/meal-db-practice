import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Shop.css'

const Shop = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    const [name, setName] = useState([])

    let foodName = []

    const nameShow = (strMeal) => {
        for (const newName of strMeal) {
            foodName.push(newName)
        }
        let newname = [name, ...foodName]
        setName(newname)
    }

    return (
        <div className='shop'>
            <div className='search'>
                <h1>food:{foods.length}</h1>
                <h4>Name : {name}</h4>

                {
                    foods.map(food => <Food food={food} key={food.idMeal} nameShow={nameShow}></Food>)
                }


            </div>
        </div>
    );
};

export default Shop;