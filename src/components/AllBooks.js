import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const AllBooks = (props) => {
    const books = props.books;

    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <Book key={book.id} book={book} onMoveBook={props.onUpdateBook} />
                    ))}
                </ol>
            </div>
        </div>
    );
}

AllBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default AllBooks;