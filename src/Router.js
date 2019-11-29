import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePagina from './paginas/homePagina'
import CarrinhoPagina from './paginas/carrinhoPagina'

const Router= () => (
    <Switch>
        <Route exact path='/' component={HomePagina} />
        <Route exact path='/carrinho' component={CarrinhoPagina} />
    </Switch>
)

export default Router