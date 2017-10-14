import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'

class InformationPage extends Component {
    state = {
        book: [],
        image: '',
    }

    componentDidMount() {
        BooksAPI.get(this.props.match.params.id)
            .then((book) => this.setState(
                { book, image: book.imageLinks.thumbnail }
            ));
    }

    render() {
        const {
            title,
            subtitle,
            authors,
            publisher,
            description,
            categories,
            pageCount,
            previewLink,
            infoLink
        } = this.state.book

        return (
            <div className="information-page container">
                <Link to="/" className="close-search">Close</Link>

                <div className="row" >
                    <div className="col-xs-12 col-md-2">
                        <img src={this.state.image} alt={title} title={title} />
                    </div>

                    <div className="col-xs-12 col-md-10">
                        <h1 style={{ marginTop: 0 }} >{title}</h1>
                        <h2 style={{ marginTop: 10, marginBottom: 20, fontSize: 20, color: 757575 }}>{subtitle} </h2>
                        <p>
                            <span>Author: </span> {authors ? authors.join(' | ') : ''}
                        </p>
                        <p>
                            <span>Publisher: </span> {publisher}
                        </p>
                        <p>
                            <span>Category: </span> {categories}
                        </p>

                        <p>
                            <span>Pages: </span> {pageCount}
                        </p>
                    </div>
                </div>
                <section style={{ marginTop: 15 }}>
                    <p className="info-description"> {description} </p>

                    <a href={previewLink} target="_blank" className="button-info button-preview" >
                        <span>Preview</span>
                    </a>

                    <a href={infoLink} target="_blank" className="button-info button-see-more" >
                        <span>See More</span>
                    </a>
                </section>
            </div>

        )
    }
}

export default InformationPage;