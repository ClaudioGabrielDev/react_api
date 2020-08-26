import React from 'react';

import './style.scss'

const Header = ({ value }) => (
    <header id="main-header">
      <div className="input">
          <input type="text" placeholder="Nome do herói" className="form-heros" onChange={(event) => value(event)} id="name-hero"></input>
          <button className="bt-input" type="text" >Pesquisar</button>
      </div>
    </header>
  );
  
    
export default Header;