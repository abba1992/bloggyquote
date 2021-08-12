import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <div className={classes.Left}>
                <NavigationItem link=''>menu</NavigationItem>
            </div>
            <NavigationItem link=''>books</NavigationItem>
            <NavigationItem link=''>about me</NavigationItem>
        </ul>
    )
}

export default NavigationItems