import tokenService from './tokenService';

const BASE_URL = '/api/application/';

export function getAll(id){
    console.log(id, '<-- This is the id in getAll')
    return fetch(`${BASE_URL}${id}/notes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}
