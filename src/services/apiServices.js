import axios from "axios";
import {baseURL} from "../constants/urls";

export const apiServices = axios.create({baseURL});