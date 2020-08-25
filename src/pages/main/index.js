import React, {Component} from 'react';
import api from '../../services/api.js';
import './style.css'

export default class Main extends Component {

    state = {
        heros: [],
        heroinfo: [],
        offset: 0,
        ShowMe: false,
        nameStartsWith: [],

    };

    componentDidMount(){
        this.loadHeros();

    }

    loadHeros = async (offset = 0, nameStartsWith) => {
        const response = await api.get(`https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1597841898&apikey=3dd643db72bfef60e2ba5654f10c3070&hash=ada0c5002b1f3db5cb18a7eaa9ee42d4&offset=${offset}`);

        const { results, ...heroinfo } = response.data.data;

        this.setState({ heros: results, heroinfo, offset, nameStartsWith });
    };

    

    prevPage = () => {
    
        const { offset, heroinfo} = this.state;

        if (offset === 0) return;

        const offNumber = offset - 10;

        this.loadHeros(offNumber);
        
    };
    nextPage = () => {
        const { offset, heroinfo} = this.state;

        if (offset === heroinfo.total) return;

        const offNumber = offset + 10;

        this.loadHeros(offNumber);
    };
    descrip(){
        this.setState({
            ShowMe:!this.state.ShowMe
        })
    }

    


    
    

    render(){

        const { heros, offset, heroinfo } = this.state;

        return (
            
            
            
            <div className="list-heros">

                <div className="input-heros">
                    
                    <input type="text" placeholder="Nome do herói" className="form-heros" id="name-hero"></input>
                    <button className="bt-input" type="text" >Pesquisar</button>
                </div>
            
                
                {heros.map(hero => (
                <article key={hero.id}>
                    <div className="img-hero"><img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="img do heroi"></img></div>
                    <div className="info-heros">
                    <strong>{hero.name}</strong>
                    <button className="bt-info" onClick = {() => this.descrip()}>Descrição</button>
                    </div>
                    {this.state.ShowMe?
                        <div className="description">{hero.description}</div>
                    :null
                    }
                    
                    </article>
            ))}
                <div className="actions">
                    <button disabled= {offset === 0 } onClick = {this.prevPage}>Anterior</button>
                    <button disabled= {offset === heroinfo.total } onClick = {this.nextPage}>Proximo</button>
                </div>
            </div>

        );
    }
}