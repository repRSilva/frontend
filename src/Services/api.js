import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uploadfilenode.herokuapp.com'
});

export default api;