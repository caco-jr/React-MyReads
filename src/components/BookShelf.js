import React from 'react'
import Book from './Book'

const BookShelf = props => {
    const shelves = [
        {
            flag: "currentlyReading",
            shelf: "Currently Reading"
        },
        {
            flag: "wantToRead",
            shelf: "Want To Read"
        },
        {
            flag: "read",
            shelf: "Read"
        }
    ];

    return (
        <div>
            {
                shelves.map((shelf, index) => (
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

export default BookShelf;