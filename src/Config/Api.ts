import axios from 'axios';

export const API_URL = "https://back-softwares-production.up.railway.app";
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});