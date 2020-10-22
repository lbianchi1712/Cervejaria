import React, { useState } from 'react';
import './styles.css';

import api from '../../services/api';
import HeaderPrincipal from '../Header/index';

export default function Cadastrar() {
    const [ nome, setNome ] = useState('');
    const [ sobrenome, setSobrenome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if(!nome || !sobrenome || !email || !password) {
            alert("Todos os itens devem ser preenchidos");
        } else {
            await api.post('sessions', {
                nome,
                sobrenome,
                email,
                password
            });
    
            window.location.href = "http://localhost:3000/login";
        }

    }

    return (
        <>
            <HeaderPrincipal /><br/>
            <div className="cadastro">
                <div className="formulario-container">
                    <label id="cadastro-titulo">CADASTRO</label>
                    <form className="cadastro-form" onSubmit={handleSubmit}>
                        <input 
                            id="cadastro-nome" 
                            type="nome" 
                            placeholder="NOME" 
                            onChange= {event => setNome(event.target.value)}
                        />
                        <input 
                            id="cadastro-sobrenome" 
                            type="sobrenome" 
                            placeholder="SOBRENOME" 
                            onChange= {event => setSobrenome(event.target.value)}
                        />
                        <input 
                            id="cadastro-email" 
                            type="email" 
                            placeholder="EMAIL"
                            onChange= {event => setEmail(event.target.value)}
                        />
                        <input 
                            id="cadastro-senha" 
                            type="password" 
                            placeholder="PASSWORD" 
                            onChange= {event => setPassword(event.target.value)}
                        />
                        <button className="cadastro-entrar" type="submit">REGISTRAR</button>
                    </form>
                </div>
            </div>
        </>
    );
}