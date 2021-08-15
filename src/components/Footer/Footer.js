import React from 'react';
import classes from './Footer.module.css';
import facebook from '../../../src/assets/facebook.png'
import github from '../../../src/assets/github.png'
import twitter from '../../../src/assets/twitter.png'
import linkedIn from '../../../src/assets/linkedin.png'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={linkedIn} alt='linkedIn' />
            <img src={github} alt='github' />
        </div>
    )
}


export default Footer