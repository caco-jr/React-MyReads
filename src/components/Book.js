import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {

    const propTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired
    };

    const { title, authors, shelf } = props.book;
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
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${backgroundImage} )` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(event) => handleShelfChange(event.target.value)} >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
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

export default Book;