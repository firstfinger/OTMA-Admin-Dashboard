import { get, post, postWithAuthorization, postWithAuthorizationFormData } from './axios';
import { client_id, client_secret } from '../env.js';

export function login(data) {
    return post('/oauth/token', {
        ...data,
        custom_provider: "admins",
        grant_type: "password",
        client_id,
        client_secret,
    })
}
export function getApplicationList() {
    return get('/api/admin/application')
}

export function getAssociateList() {
    return get('/api/admin/assoc')
}

export function getCommitteeList() {
    return get('/api/admin/committee')
}

export function getTourGuideList() {
    return get('/api/admin/tg')
}




