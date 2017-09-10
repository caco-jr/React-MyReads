import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SHELVES } from '../utils/shelves'

const Book = props => {
    const { title, authors, shelf, id } = props.book;
    const backgroundImage = props.book.imageLinks.smallThumbnail;
    console.log(title);

    const handleShelfChange = (shelfChange) => {
        const book = props.book;
        const log = console.log(shelfChange, book);

        props.onMoveBook(props.book, shelfChange)
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <Link to={`/book/${id}`}>
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${backgroundImage} )` }}></div>
                    </Link>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(event) => handleShelfChange(event.target.value)} >
                            <option value="none" disabled>Move to...</option>
                            {
                                SHELVES.map(
                                    (shelf, index) => (<option value={shelf.flag} key={index} > {shelf.shelf} </option>)
                                )
                            }
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title"> {title} </div>
                <div className="book-authors"> {authors} </div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
};

export default Book;