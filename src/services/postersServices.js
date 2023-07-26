import {apiServices} from "./apiServices";
import {postURL} from "../constants/urls";

export const postersServices = {
    getPost: (post) => (apiServices.get(`${postURL}${post}`))
}