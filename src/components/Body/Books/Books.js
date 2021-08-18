import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Book from './Book/Book';
import Modal from '../../Modal/Modal';
import classes from './Books.module.css';
import Summary from '../../Modal/Summary/Summary';

class Books extends Component {
    state = {
        booksData: [
            { id: 1, author: 'Robert Greene', title: 'Mastery' },
            { id: 2, author: 'Brian Tracy', title: 'Eat that frog' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
            { id: 4, author: 'Angela Duckworth', title: 'Grit' },
            { id: 5, author: 'Angela Duckworth', title: 'Grit' },
            { id: 6, author: 'Angela Duckworth', title: 'Grit' },
            { id: 7, author: 'Angela Duckworth', title: 'Grit' },
            { id: 8, author: 'Angela Duckworth', title: 'Grit' },
            { id: 9, author: 'Angela Duckworth', title: 'Grit' },
            { id: 10, author: 'Angela Duckworth', title: 'Grit' },
        ],
        showModal: false
    }
    bookSummaryHandler = (id) => {
        const bookId = this.state.booksData.find(book => {
            return book.id === id + 1
        })
        return bookId.title
    }
    modalHandler = () => {
        this.setState({
            showModal: true
        })
    }
    modalCloseHandler = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        const books = this.state.booksData.map((book, index) => <Book
            key={book.id}
            {...book}
            status={() => this.bookSummaryHandler(index)}
            show={this.modalHandler}
        />)
        return (
            <Aux>
                <Modal modalShow={this.state.showModal} modalClose={this.modalCloseHandler}>
                    <Summary summary={this.state.booksData} />
                </Modal>
                <div className={classes.Books}>
                    {books}
                </div>
            </Aux>
        )
    }
}

export default Books;