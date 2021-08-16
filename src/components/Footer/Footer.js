import React from 'react';
import classes from './Footer.module.css';


const Footer = () => {
    return (
        <div className={classes.Footer}>
            <p>
                <a href='/'>facebook</a>
                <a href='/'>twitter</a>
                <a href='/'>linkedIn</a>
                <a href='/'>github</a>
            </p>
        </div>
    )
}


export default Footer