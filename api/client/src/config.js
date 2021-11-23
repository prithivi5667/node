import axios from "axios";

export const axiosInstance =axios.create({
    baseURL : "https://nodeblogpt.herokuapp.com/api/"
})