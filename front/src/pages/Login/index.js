import React from 'react';
import './styles.css';

import HeaderPrincipal from '../Header/index';
import NaoAutenticado from './Components/NaoAutenticado/index';
import Autenticado from './Components/Autenticado/index';

export default function Login() {

        const user_id = localStorage.getItem('user');

        if (user_id) {
            return (
                <>
                    <HeaderPrincipal /><br />
                    <Autenticado />
                </>
            );
        } else {
            return (
                <>
                    <HeaderPrincipal /><br />
                    <NaoAutenticado />
                </>
            );
        }
}