import axios from 'axios';

export const refReqResp = axios.create({ // API reference configuration
    baseURL:'https://reqres.in/api'
});