import {apiServices} from "./apiServices";
import {postURL} from "../constants/urls";

export const postersServices = {
    getPost: (post_url) => (apiServices.get(`${postURL}${post_url}`))
}