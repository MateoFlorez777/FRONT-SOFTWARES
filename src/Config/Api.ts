import axios from 'axios';

export const API_URL = "https://perfect-passion-production.up.railway.app";
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});