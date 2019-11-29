import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProdutoListaItem(props) {
    return <div className='produto-lista-item'>
        <div className='produto-lista-item-todos'>
            <h3>{ props.produto.title }</h3>
            <img
                height={170}
                title={ props.produto.title }
                src={`/produtos/${props.produto.img}`}
            />
            
            <div><i><b>Marca: </b></i>{ props.produto.marca }</div>
            <div><i><b>Modelo: </b></i>{ props.produto.modelo }</div>
            <div><i><b>SO: </b></i>{ props.produto.so }</div>
            <div><i><b>Processador: </b></i>{ props.produto.processador }</div>
            <div><i><b>Placa de Vídeo: </b></i>{ props.produto.placa_Video }</div>
            <div><i><b>Memória Ram: </b></i>{ props.produto.memoria }</div>
            <div><i><b>Placa Mãe: </b></i>{ props.produto.placa_mae }</div>
            <div><i><b>Preço($): </b></i>{ props.produto.preco }</div>
        </div>
       
        <div>
            <AddBtn 
                carrinhoItem={props.carrinhoItem} 
                produto={props.produto} 
                addToCarrinho={props.addToCarrinho}
            />

            {
                props.carrinhoItem
                    ? <RemoveBtn 
                    carrinhoItem={props.carrinhoItem} 
                    produto={props.produto} 
                    removeFromCarrinho={props.removeFromCarrinho}
                />
                : null
            }
        </div>
    </div>
}