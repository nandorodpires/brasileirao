import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiv2.apifootball.com/'
})

export default api;