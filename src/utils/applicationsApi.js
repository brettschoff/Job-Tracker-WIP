import axios from "axios"
import tokenService from "./tokenService"

const BASE_URL = '/api/applications/'

export function getAll(){
    return axios.get(BASE_URL, {
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken()
        }
    }).then(rez => rez.json())
}

export function create(application){
    return fetch(BASE_URL,{
        method:'POST',
        body: JSON.stringify(application),
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(rez => {
        if(rez.ok) return rez.json()
        throw new Error('Something is wrong with create application')
    })
}
