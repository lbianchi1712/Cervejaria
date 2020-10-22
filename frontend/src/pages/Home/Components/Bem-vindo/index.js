import React from 'react';
import './styles.css';

export default function BemVindo() {
    return (
        <>
            <div className="bem-vindo">
                <h2>Bem-vindo á nossa loja oficial<br/>Antes de prosseguir</h2>
            </div>
            <div className="idade">
                <label>Você tem 18 anos ou mais?</label>
            </div>
        </>
    );
}