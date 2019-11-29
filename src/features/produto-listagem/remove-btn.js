import React from 'react'

export default function RemoveButton(props) {
    return <button
        onClick={() => props.removeFromCarrinho(props.carrinhoItem)}
    >Remove</button>
}