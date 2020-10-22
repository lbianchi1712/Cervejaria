import React, { useState } from 'react';
import api from '../../../../services/api';
import './styles.css';

export default function NaoAutenticado() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post('/sessions/auth', {
                email,
                password
            });
            
            localStorage.setItem('user', response.data._id);
            
            window.location.reload();
        } catch (error) {
            alert("O email e/ou senha estão incorretos. Por favor tente novamente.");
        }

    }

    return (
        <>
            <div className="login">
                <div className="formulario-container">
                    <label id="login-titulo">LOGIN</label>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input 
                            id="login-email" 
                            type="email" 
                            placeholder="EMAIL"
                            onChange= {event => setEmail(event.target.value)}
                        />
                        <input 
                            id="login-senha" 
                            type="password" 
                            placeholder="PASSWORD" 
                            onChange= {event => setPassword(event.target.value)}
                        />
                        <button className="login-entrar" type="submit">ENTRAR</button>
                    </form>
                </div>
            </div>
        </>
    );
}