import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/Navigation';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
    </ul>
)


export default navigationItems;