import axios from 'axios';

const api = axios.create({
    baseURL: 'https://paipy.herokuapp.com/'
});

export default api;

