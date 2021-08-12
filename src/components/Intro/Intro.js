import React from 'react'
import Para from './Para/Para'
import Book from './Book/Book'
import classes from './Intro.module.css'

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <h1>Books</h1>
            <Para />
            <div className={classes.toCenter}>
                <Book />
            </div>
        </div>
    )
}

export default Intro;