import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3'
export const apiServices = axios.create({baseURL});