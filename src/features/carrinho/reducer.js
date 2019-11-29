const carrinhoWithoutItem = (carrinho, item) => carrinho.filter(carrinhoItem => carrinhoItem.id !== item.id)

const itemInCarrinho = (carrinho, item) => carrinho.filter(carrinhoItem => carrinhoItem.id === item.id)[0]

const addToCarrinho = (carrinho, item) => {
    const carrinhoItem = itemInCarrinho(carrinho, item)
    return carrinhoItem === undefined
        ? [ ...carrinhoWithoutItem(carrinho, item), { ...item, quantity: 1 }]
        : [ ...carrinhoWithoutItem(carrinho, item), { ...carrinhoItem, quantity: carrinhoItem.quantity
        + 1 }]
}

const removeFromCarrinho = (carrinho, item) => {
    return item.quantity === 1
        ? [ ...carrinhoWithoutItem(carrinho, item) ]
        : [ ...carrinhoWithoutItem(carrinho, item), { ...item, quantity: item.quantity - 1} ]
}

const removeAllFromCarrinho = (carrinho, item) => {
    return [ ...carrinhoWithoutItem(carrinho, item)]

}

const carrinhoReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
            return addToCarrinho(state, action.payload)

        case 'REMOVE':
            return removeFromCarrinho(state, action.payload)

        case 'REMOVE_ALL':
            return removeAllFromCarrinho(state, action.payload)

        default:
            return state;
    }
}

export default carrinhoReducer