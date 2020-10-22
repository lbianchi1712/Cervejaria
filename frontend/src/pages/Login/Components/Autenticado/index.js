import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import './styles.css';

export default function NaoAutenticado() {
    const [user, setUser] = useState('');

    function logout() {
        localStorage.removeItem('user');

        window.location.reload();
    }

    useEffect(() => {
        async function loadUser() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/sessions', {
                headers: { _id: user_id }
            });

            setUser(response.data);
        }

        loadUser();
    }, []);
    return (
        <>
            <div className="login">
                <div className="formulario-container">
                    <h3 id="autenticado-bem-vindo">Bem-vindo</h3>
                    <label id="autenticado-nome">{user.nome} {user.sobrenome}</label>
                    <label id="autenticado-boas-compras">Aproveite todas as nossas mercadorias e boas compras!</label>
                    <div id="autenticado-cervejaria">
                        <button id="autenticado-sair" type="submit" onClick={logout}>Sair</button>
                    </div>
                </div>
            </div>
        </>
    );
}