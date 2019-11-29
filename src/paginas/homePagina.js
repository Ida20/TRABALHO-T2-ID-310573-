import React from 'react'

import ProdutoListagem from '../features/produto-listagem'

import data from '../data/produtos.json'

export default function HomePagina(props) {
    return <div>
        <h2>Home</h2>
        <ProdutoListagem  produtos={data.produtos}/>
    </div>
} 