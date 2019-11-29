import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'
import carrinho from './assets/carrinho.png';
import home from './assets/home.png';

const Navegacao = (props) => <nav>
  <ul className="top-menu">
    <li className="home"><NavLink to='/'><img src={home} className="home"/></NavLink></li>
    <li className="imagem-carrinho"><NavLink to='/carrinho'><img src={carrinho} className="imagem-carrinho"/></NavLink></li>
  </ul>
</nav>

class App extends Component {
  render () {
    return <div className='page-container'>
      <Navegacao />
      <Router />
    </div>    
  }
}

export default App;
