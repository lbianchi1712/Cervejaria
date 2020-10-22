import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Footer() {
    function messageAlert() {
        alert("Essa loja só permite maiores de 18 anos");
    }
    return (
        <>
            <div className="opcoes">
                <div className="btnsim">
                    <Link to="/products"><button className="btn-footer" type="submit" value="sim">Sim</button></Link>
                </div>
                <div className="btnnao">
                    <button className="btn-footer" type="submit" onClick={messageAlert}>Não</button>
                </div>
            </div>
        </>
    );
}