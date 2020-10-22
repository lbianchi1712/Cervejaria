import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import './styles.css';

export default function CartNaoLogado() {
    const [carts, setCarts] = useState([]);

    async function apagarProduto(event) {
        const id_compra = event.target.id;

        await api.post('/cart', { _id: id_compra });

        window.location.reload();
    }
    
    useEffect(() => {
        const user_id = localStorage.getItem('user');
        async function loadCart() {
            const response = await api.get('/cart', {
                headers: { user_id: user_id}
            });

            console.log(response.data[0]);
            if (response.data[0] === undefined) {
                alert("Ainda não tem mercadoria na sua geladeira!");

                window.location.href = "http://localhost:3000/products";
            }
            
            setCarts(response.data);
        }

        loadCart();
    }, []);
    
    return (
        <>  
            <h1 id="titulo-page-cart">MINHA GELADEIRA</h1>
            <div className="caixa-cart">
                <ul className="cart-itens">
                    <h2 id="products-cart">PRODUTOS</h2>
                    {carts.map(cart => (
                        <li key={cart._id}>
                            <header id="image-product" style={{ backgroundImage: `url(${cart.product.imagem_url})` }}/>
                            <strong id="info-product">{cart.product.nome}</strong>
                            <label id="descricao-product">{cart.product.descricao}</label>
                        </li>
                    ))}
                </ul>
                <ul className="cart-quantidade">
                    <h2 id="quantidade-cart">QUANTIDADE</h2>
                    {carts.map(cart => (
                        <li key={cart._id}>
                            <label id="quantidade-product">1</label>
                        </li>
                    ))}
                </ul>
                <ul className="cart-valor">
                    <h2 id="valor-cart">VALOR</h2>
                    {carts.map(cart => (
                        <li key={cart._id}>
                            <label id="valor-product">{`R$ ${cart.product.preco.toString().replace('.', ',')}`}</label>
                        </li>
                    ))}
                </ul>
                <ul className="cart-apagar">
                    <h2 id="apagar-cart">CANCELAR</h2>
                    {carts.map(cart => (
                        <li key={cart._id}>
                            <button type="submit" className="apagar-product" id={cart._id} onClick={apagarProduto}></button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}