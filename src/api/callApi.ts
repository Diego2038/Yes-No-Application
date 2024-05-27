import axios from 'axios';

export const getApi = axios.create({
  baseURL: 'https://yesno.wtf',
});
