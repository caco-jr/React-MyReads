import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import Search from './components/Search'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={BookShelf} />
            <Route path="/search" component={Search} />
        </Switch>
    </main>
)

export default Main;