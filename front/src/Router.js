
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
    UrlCreator,
    UrlManager
} from './Routes';

import './style/utils.css';

const Router = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/index.html" component={UrlCreator} />
                    <Route exact path="/" component={UrlCreator} />
                    <Route exact path="/links" component={UrlManager} />
                </Switch>
            </BrowserRouter>
        </>
    )

        ;
}

export default Router;