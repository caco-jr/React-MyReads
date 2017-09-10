import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import { SHELVES } from '../utils/shelves'

const BookShelf = props => {
    return (
        <div>
            {
                SHELVES.map((shelf, index) => (
                    <div key={index} className="bookshelf">
                        <h2 className="bookshelf-title"> {shelf.shelf} </h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    props.book
                                        .filter(
                                        book => book.shelf === shelf.flag
                                        )
                                        .map(
                                        book => (
                                            <Book key={book.id} book={book} onMoveBook={props.onMoveBook} />
                                        )
                                        )
                                }
                            </ol>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

BookShelf.prototypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
};

export default BookShelf;