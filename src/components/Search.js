import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import AllBooks from "./AllBooks"
import * as BooksAPI from '../utils/BooksAPI';

class SearchBooks extends PureComponent {

    state = {
        value: "",
        books: [],
        shelfBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(shelfBooks => this.setState({ shelfBooks }))
    }

    relocateBook = (oldBook, shelf) => {
        let bookToUpdate = this.state.shelfBooks.filter(book => book.id === oldBook.id);

        bookToUpdate.shelf = shelf;

        this.setState(state => ({
            shelfBooks: (
                state.shelfBooks.filter(book => book.id !== oldBook.id).concat(bookToUpdate)
            )
        }))
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        this.searchBook(this.state.value);
    }

    searchBook = (value) => {
        if (value) {
            BooksAPI.search(value, 20).then((allBooks) => {
                if (!allBooks.error && value !== "") {
                    this.setState({ books: allBooks });
                } else if (value === "") {
                    this.setState({ books: [] });
                }
            });
        }
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.relocateBook(book, shelf);
    }

    render() {
        const { books, shelfBooks } = this.state;
        let BooksList = [];

        if (books.length > 0) {
            BooksList = books.map((book) => {
                let nbook;
                shelfBooks.forEach((shelfBook) => {
                    if (book.id === shelfBook.id) {
                        nbook = shelfBook;
                    }
                });
                if (nbook) {
                    return nbook;
                } else {
                    book.shelf = "none";
                    return book;
                }
            });
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <AllBooks books={BooksList}
                            onUpdateBook={this.updateBook}
                        />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;