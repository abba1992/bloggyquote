import React from 'react'
import Para from './Para/Para'
import BookButton from './BookButton/BookButton'
import classes from './Intro.module.css'

const Intro = () => {
    return (
        <div className={classes.Intro}>
            <h1>Books</h1>
            <Para />
            <BookButton />
        </div>
    )
}

export default Intro;