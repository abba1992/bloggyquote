import React from 'react';

const Summary = (props, title) => {
    const bookId = props.summary.find(book => {
        return (book.title === title);
    })
    return (
        <div>
            {bookId}
        </div>
    )
}

export default Summary;