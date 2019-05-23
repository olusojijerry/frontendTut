import React from 'react';

import burgerLogo from '../../asset/Images/codeCapture.PNG';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}> 
        <img src={burgerLogo} alt='MyBurger' />
    </div>
)

export default logo;