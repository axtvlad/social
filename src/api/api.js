import * as axios from "axios";

const api = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '5a02e0ce-1492-47cd-b69a-6445510cc320',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(pageSize = 5, pageNumber = 1) {
        return api.get(`users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data);
    },
    follow(userId) {
        return api.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return api.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    me() {
        return api.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return api.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return api.delete(`auth/login`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return api.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getProfileStatus(userId) {
        return api.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateProfileStatus(status) {
        return api.put(`profile/status`, {
            status: status
        })
            .then(response => response)
    }
}