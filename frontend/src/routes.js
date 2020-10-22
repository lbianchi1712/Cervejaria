import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Cadastrar from './pages/Cadastrar';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/cart" component={Cart} />
                <Route path="/cadastrar" component={Cadastrar} />
            </Switch>
        </BrowserRouter>
    )
}