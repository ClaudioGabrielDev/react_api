import React, {Component} from 'react';
import api from '../../services/api.js';
import './style.css'

export default class Main extends Component {

    state = {
        heros: [],

    };

    componentDidMount(){
        this.loadHeros();

    }

    loadHeros = async () => {
        const response = await api.get('');

        this.setState({ heros: response.data.data.results })
    };

    render(){

        const { heros } = this.state;

        return (
            <div className="list-heros">{heros.map(hero => (
                <article key={hero.id}>
                    <div className="img-hero"><img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="img do heroi"></img></div>
                    <div className="info-heros">
                    <strong>{hero.name}</strong>
                    <a href="#">Descrição</a>
                    </div>
                    </article>
            ))}</div>
        );
    }
}