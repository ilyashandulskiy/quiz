import axios from 'axios';
import constants from './constants';

const instance = axios.create({
  baseURL: constants.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
