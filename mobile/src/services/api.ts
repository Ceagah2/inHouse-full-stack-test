import Axios from 'axios';

export const Api = Axios.create({
  baseURL: 'http://127.0.0.1:3333/api',
})

