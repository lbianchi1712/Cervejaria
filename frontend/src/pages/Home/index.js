import React from 'react';
import './styles.css'

import Header from './Components/Header/index';
import BemVindo from './Components/Bem-vindo/index';
import Footer from './Components/Footer/index';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home-container">
                <div className="maioridade">
                    <BemVindo />
                    <Footer />
                </div>
            </div>
        </>
    );
}