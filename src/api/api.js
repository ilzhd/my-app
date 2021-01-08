import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "6f92ae8c-5f4b-4f48-b38d-b64a8b31046a",
    },
})

export const usersApi = {
    getUsers (currentPage = 1,pageSize = 20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => {
                return  response.data
            });
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authApi = {
    authMe () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}
export const profileApi = {
    setProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}