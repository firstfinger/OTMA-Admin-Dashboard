import axios from 'axios';
import { base_url } from '../env'

var instance = axios.create();


export function post(url, data) {
    return instance.post(base_url + url, data)
}

export function get(url) {
    const token = JSON.parse(localStorage.getItem('token'));
    return instance.get(base_url +rl, {
        headers: { 'Authorization': 'Bearer ' + token }
    })
}

export function postWithAuthorization(url, data, param = null) {
    const token = JSON.parse(localStorage.getItem('token'));
    return instance.post(base_url + url, data, {
        headers: { 'Authorization': 'Bearer ' + token }
    })
}

export function postWithAuthorizationFormData(url, data, param = null) {
    const token = JSON.parse(localStorage.getItem('token'));
    return instance.post(base_url + url, data, {
        headers: {
            'Accept': "*/*",
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        }
    })
}