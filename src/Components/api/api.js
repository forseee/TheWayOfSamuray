import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cc04c49f-da84-4c6c-9a4d-92c62f81b89c'
    }
})

export const userApi = {
    getUser(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    deleteUser(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data )
        )
    },

    postUser(userId) {
        return (
            instance.post(`follow/${userId}`, {})
                .then(response => response.data )
        )
    }
}

export const profileApi = {

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },

    updateStatus(status) {
        return (
            instance.put(`profile/status`, { status: status})
        )
    }
}