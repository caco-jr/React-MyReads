import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class AllBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    state = {
        value: ""
    }

    render() {
        const books = this.props.books;
        return (
            <div className="bookshelf">
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <Book key={book.id} book={book} onMoveBook={this.props.onUpdateBook} />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default AllBooks;