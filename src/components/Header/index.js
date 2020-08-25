import React from 'react';

import './style.scss'

const Header = () => (
    <header id="main-header">
                <div className="input">
                    <input type="text" placeholder="Nome do herói" className="form-heros" id="name-hero"></input>
                    <button className="bt-input" type="text" >Pesquisar</button>
                </div>
                
        </header>
);
    
export default Header;

