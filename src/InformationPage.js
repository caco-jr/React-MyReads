import React, { Component } from 'react'

class InformationPage extends Component {
    state = {}

    componentDidMount() {
        if (this.props.book) {
            this.setState({ book: this.props.book })
        } else if (this.props.bookId) {
            BooksAPI.get(this.props.bookId).then((book) => this.setState({ book: book }));
        }
    }

    render() {

    }
}

export default InformationPage;