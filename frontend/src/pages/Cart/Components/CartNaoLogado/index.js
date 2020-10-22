import React from 'react';
import './styles.css';

export default function CartNaoLogado() {
    return (
        <>
            <div className="cart-nao-logado">
                <div className="cart-mensagem-nao-logado">
                    <h1 id="mensagem-titulo">Olá, apreciador de cervejas!</h1>
                    <label id="mensagem-descricao">
                        Para você poder aproveitar nosso produtos e adicioná-los na sua geladeira,
                        você precisa realizar o login em nossa cervejaria.
                    </label>
                    <label id="mensagem-cervejaria">Att, Cervejaria Insana</label>
                </div>
            </div>
        </>
    );
}