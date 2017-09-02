import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import Main from './Main'
import './App.css'

class BooksApp extends React.Component {
    state = {}

    render() {
        return (
            <div className="app">
                <Main />
            </div>
        )
    }
}

export default BooksApp