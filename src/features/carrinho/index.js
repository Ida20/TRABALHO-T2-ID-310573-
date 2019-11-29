import React from 'react'
import { connect } from 'react-redux'

/*function sort(itens) {
    return itens.sort((a, b) => a.id < b.id)
}*/

//
/*function somar(valor) {
    return valor.somar(preco + preco)
}*/
//

const sort = itens => {
    return itens.sort((a, b) => {
      if (a.id !== b.id) {
        return a.id - b.id;
      }
    });
  };
  

function Carrinho(props) {
    return <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                sort(props.carrinho).map(item => <tr>
                    <td>{ item.title }</td>
                    <td>{ item.quantity }</td>
                    <td>{ item.preco * item.quantity }</td>
                    <td>
                        <button
                            onClick={() => props.addToCarrinho(item)}
                        >+</button>

                        <button
                            onClick={() => props.removeFromCarrinho(item)}
                        >-</button>
                    </td>
                    <td>
                        <button
                            onClick={() => props.removeAllFromCarrinho(item)}
                        >
                            Remove all from carrinho
                        </button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

function mapStateToProps(state) {
    return {
        carrinho: state.carrinho,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCarrinho: (item) => {
            dispatch({ type: 'ADD', payload: item })
        }, 
        removeFromCarrinho: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCarrinho: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)




