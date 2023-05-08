import axios from "axios"
import tokenService from "./tokenService"

BASE_URL = '/api/applications/'

export function getAll(){
    return axios.get(BASE_URL, {
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken()
        }
    }).then(rez => rez.json())
}

