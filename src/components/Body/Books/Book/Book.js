import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h4>Book Image</h4>
            <h4>{props.title}</h4>
            <h4>{props.author}</h4>
        </div>
    )
}

export default Book