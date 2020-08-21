import axios from 'axios';

const api = axios.create({baseURL:'https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=0&ts=1597841898&apikey=3dd643db72bfef60e2ba5654f10c3070&hash=ada0c5002b1f3db5cb18a7eaa9ee42d4'});

export default api;