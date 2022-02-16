import axios from "axios"
import constants from "./constants"

const instance = axios.create({
    baseURL: constants.BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
  });

export const get = instance.get;
export const post = instance.post;
