import React, {Component} from 'react';
import api from '../../services/api.js';

export default class Main extends Component {

    componentDidMount(){
        this.loadHeros();

    }

    loadHeros = async () => {
        const response = await api.get('');

        console.log(response.data.data.results);
    };

    render(){
        return <h1>Hello World</h1>;
    }
}