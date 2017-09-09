import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookBox from './BookBox'
import Search from './components/Search'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={BookBox} />
            <Route path="/search" component={Search} />
        </Switch>
    </main>
)

export default Main;