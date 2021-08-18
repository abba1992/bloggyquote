import React from 'react';
import classes from './Book.module.css'

const Book = (props) => {
    return (
        <div className={classes.Book}>
            <div className={classes.img}>
                <img src={props.pic} alt='asdf' />
            </div>
            <h4 onClick={props.status}>{props.title}</h4>
            <h4>{props.author}</h4>
            <button onClick={props.show}>Read Summary</button>
        </div>
    )
}

export default Book