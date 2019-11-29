import React from 'react'
import ProdutoListaItem from './produto-lista-item'
import { connect } from 'react-redux'
import { carrinhoItensWithQuantities } from '../carrinho';


function ProdutoListagem(props) {
    return <div className='produto-listagem'>
        {
            props.produtos.map( produto =>
                <ProdutoListaItem 
                    produto={produto} 
                    addToCarrinho={props.addToCarrinho}
                    removeFromCarrinho={props.removeFromCarrinho}
                    carrinhoItem={props.carrinho.filter(carrinhoItem => carrinhoItem.id === produto.id)[0]}
                />)
        }
    </div>
}


function mapStateToProps(state) {
    return {
        carrinho: state.carrinho,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCarrinho: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCarrinho: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdutoListagem)