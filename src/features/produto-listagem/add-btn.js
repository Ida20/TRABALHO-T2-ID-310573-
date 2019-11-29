import React from 'react'

export default function AddButton(props) {
    return <button
        onClick={() => props.addToCarrinho(props.produto)}
    >Add para o carrinho({
        (props.carrinhoItem && props.carrinhoItem.quantity) || 0
    })</button>
}