import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookBox from './BookBox'
import Search from './components/Search'
import InformationPage from './components/InformationPage'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={BookBox} />
            <Route path="/search" component={Search} />
            <Route path="/book/:id" component={InformationPage} />
        </Switch>
    </main>
)

export default Main;