import React, { Component } from 'react';
import Book from './Book/Book';
import classes from './Books.module.css';

class Books extends Component {
    state = {
        booksData: [
            { id: 1, author: 'Robert Greene', title: 'Mastery' },
            { id: 2, author: 'Brian Tracy', title: 'Eat that frog' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
        ]
    }
    render() {
        const books = this.state.booksData.map((book) => <Book key={book.id} {...book} />)
        return (
            <div className={classes.Books}>
                {books}
            </div>
        )
    }
}

export default Books;