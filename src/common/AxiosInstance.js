import axios from 'axios';
import { MAIN_API } from './const';

export const axiosInstance = axios.create({
  baseURL: MAIN_API, 
  headers: {
    'Content-Type': 'application/json'
  },
});


