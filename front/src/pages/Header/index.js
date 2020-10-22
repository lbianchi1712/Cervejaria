import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function HeaderPrincipal() {
    return (
        <>
            <div className="header-principal">
                <div className="header-logo"></div>
                <div className="menu">
                    <Link to="/promocoes"><button className="btn-header" type="submit">PROMOÇÕES</button></Link>
                    <Link to="/products"><button className="btn-header" type="submit">PRODUTOS</button></Link>
                    <Link to="/login"><button className="btn-header" type="submit">ENTRAR</button></Link>
                    <Link to="/cadastrar"><button className="btn-header" type="submit">CADASTRAR</button></Link>
                    <Link to="/cart"><button className="btn-header" type="submit">GELADEIRA</button></Link>
                </div>
            </div>
        </>
    );
}