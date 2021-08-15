import React from 'react'
import Books from './Books/Books'
import classes from './Body.module.css';


const Body = () => {
    return (
        <div className={classes.Body}>
            <Books />
        </div>
    )
}

export default Body