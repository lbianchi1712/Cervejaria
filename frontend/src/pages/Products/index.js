import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

import HeaderPrincipal from '../Header/index';

export default function Products() {
    const [products, setProducts] = useState([]);
    const user_id = localStorage.getItem('user');

    async function geladeira(event) {
        event.preventDefault();

        if (!user_id) {
            window.location.href = "http://localhost:3000/login";
        } else {
            const product_id = event.target.id;
            await api.post(`/products/${product_id}/cart`, { user_id });
            alert("Produto adicionado na geladeira!");
        }
    }

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            console.log(response.data);

            setProducts(response.data);
        }

        loadProducts();
    }, []);

    return (
        <>
            <HeaderPrincipal /><br/>
            <ul className="products-list">
                {products.map(product => (
                    <li key={product._id}>
                        <header style={{ backgroundImage: `url(${product.imagem_url})` }}/>
                        <strong>{product.nome}</strong>
                        <label id="label_descricao">{product.descricao}</label>
                        <span>{`R$ ${product.preco.toString().replace('.', ',')}`}</span>
                        <button className="products-button" id={product._id} onClick={geladeira}>ADICIONAR NA GELADEIRA</button>
                    </li>
                ))}
            </ul>
        </>
    );
}