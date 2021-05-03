import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = props => {
    const transformedIngredients = Object.keys(props.ingredients).map(elem => {
        return [...Array(props.ingredients.length)].map((_,i) => {
            return <BurgerIngredients key={elem + i} type={elem}/>
        })
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}

export default Burger;