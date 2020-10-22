import React from 'react';
import './styles.css';

import HeaderPrincipal from '../Header/index';
import CartNaoLogado from './Components/CartNaoLogado/index';
import CartLogado from './Components/CartLogado/index';

export default function Cart() {
    const user_id = localStorage.getItem('user');

        if (user_id) {
            return (
                <>
                    <HeaderPrincipal /><br />
                    <CartLogado />
                </>
            );
        } else {
            return (
                <>
                    <HeaderPrincipal /><br />
                    <CartNaoLogado />
                </>
            );
        }
}