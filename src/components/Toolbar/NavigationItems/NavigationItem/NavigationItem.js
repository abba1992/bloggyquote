import React from 'react'
import classes from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return (
        <li className={classes.Links}>
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default NavigationItem