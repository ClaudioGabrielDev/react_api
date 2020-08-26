import React, {Component} from 'react';
import api from '../../services/api.js';
import Header from '../../components/Header';
import './style.css'


export default class Main extends Component {

    state = {
      heros: [],
      heroinfo: [],
      offset: 0,
      ShowMe: false,
      values: "",
    };

    componentDidMount(){
      this.loadHeros();
    }

    loadHeros = async (offset = 0, values) => {
      const url = `https://gateway.marvel.com:443/v1/public/characters?limit=3&ts=1597841898&apikey=3dd643db72bfef60e2ba5654f10c3070&hash=ada0c5002b1f3db5cb18a7eaa9ee42d4&offset=${offset}${values}`
      const response = await api.get(url);
      const { results, ...heroinfo } = response.data.data;

      this.setState({
        heros: results,
        heroinfo,
        offset,
        values,
      });
    };

    prevPage = () => {

        const { offset, heroinfo} = this.state;

        if (offset === 0) return;

        const offNumber = offset - 3;

        this.loadHeros(offNumber);

    };
    nextPage = () => {
        const { offset, heroinfo, } = this.state;
    
        if (offset === heroinfo.total) return;

        const offNumber = offset + 3;

        this.loadHeros(offNumber);
    };
    descrip(){
        this.setState({
            ShowMe: !this.state.ShowMe
        })
    }

    value = (event) => {     
        this.loadHeros('', `&nameStartsWith=${event.target.value}`)
    }

    render(){
        const { heros, offset, heroinfo, values} = this.state;

        console.log('Quem é values --->>', this.state.values);

        return (
          <>
            <Header value={this.value} />

            <div className="list-heros">
              <div className="articles">
                {heros.map(hero => (
                  <article key={hero.id}>
                    <div className="img-hero">
                      <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="img do heroi" />
                    </div>

                    <div className="info-heros">
                      <strong>{hero.name}</strong>
                      <button className="bt-info" onClick = {() => this.descrip()}>Descrição</button>
                    </div>

                    {this.state.ShowMe ? <div className="description">{hero.description}</div> :null }

                  </article>
                ))}
              </div>
              <div className="actions">
                  <button disabled= {offset === 0 } onClick = {this.prevPage}>Anterior</button>
                  <button disabled= {offset === heroinfo.total } onClick = {this.nextPage}>Proximo</button>
              </div>
            </div>
        </>
        );
    }
}