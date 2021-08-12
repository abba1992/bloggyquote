import React, { Component } from 'react';
import Book from './Book/Book';
class Books extends Component {
    state = {
        booksData: [
            { id: 1, author: 'Robert Greene', title: 'Mastery' },
            { id: 2, author: 'Brian Tracy', title: 'Eat that frog' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
            { id: 4, author: 'Ray Papasan', title: 'The one thing' },
        ]
    }
    render() {
        const books = this.state.booksData.map((book) => <Book key={book.id} {...book} />)
        return (
            <div>
                {books}
            </div>
        )
    }
}

export default Books;