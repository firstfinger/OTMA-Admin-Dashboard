import { get, post, postWithAuthorization, postWithAuthorizationFormData } from './axios';
import { client_id, client_secret } from '../env.js';

export function login(data) {
    return post('/oauth/token', {
        ...data,
        custom_provider: "applicants",
        grant_type: "password",
        client_id,
        client_secret,
    })
}

//Insurant api
export function getInsurantList() {
    return get('/api/applicant/insurants')
}

export function getSoleInsurant(data) {
    return get('/api/applicant/insurants/' + data)
}

export function updateInsurant(uuid, data) {
    return postWithAuthorization('/api/applicant/insurants/' + uuid, data)
}

export function addInsurant(data) {
    return postWithAuthorizationFormData('/api/applicant/insurants', data)
}

export function addMedicalProfile(data, uuid) {
    return postWithAuthorization('/api/applicant/insurants/' + uuid + '/medical_profiles', data)
}

export function createWithdrawal(uuid) {
    return postWithAuthorization('/api/applicant/insurants/' + uuid + '/withdraw')
}

//Applicant Api

export function verifyPhoneNumber(data) {
    return post('/api/applicant/auth/phone_verifications', data)
}

export function verifyPhoneCode(data) {
    return post('/api/applicant/auth/phone_verifications/' + data.eid + '/verify', data)
}

export function registerUser(data) {
    return post('/api/applicant/auth/register', data)
}

//Hospital Panel Api 
export function getHospitalList() {
    return get('/api/applicant/hospitals')
}

//Payment Api 
export function getPaymentHistory() {
    return get('/api/applicant/payments')
}

export function createPayment(data) {
    return postWithAuthorization('/api/applicant/insurants/' + data.uuid + '/payments', data)
}

