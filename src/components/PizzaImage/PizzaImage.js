import React from 'react';

import classes from './PizzaImage.module.css';
import PizzaImageJPG from '../../assets/pizza.jpg';

const pizzaImage = () => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImageJPG} className={classes.PizzaImageJPG} />
    </div>
);

export default pizzaImage;