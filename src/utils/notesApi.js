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

export function create(id, data){
    return fetch(`${BASE_URL}${id}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenService.getToken()  
    },
    body: JSON.stringify(data)
    }).then(res => res.json());
}

export function deleteNote(id){
    return fetch(`/api/notes/${id}`,{
        method: 'DELETE',
        headers:{
            Authorization: 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
}