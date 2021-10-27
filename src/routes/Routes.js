import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PostCardsPage } from '../pages/PostCardsPage';
import { Balls } from '../components/Balls';

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/PostCardsPage/:pokemonName?' component={PostCardsPage} exact />
                <Route path='*' component='' />
                <Balls/>
            </Switch>
        </BrowserRouter>
    );
}