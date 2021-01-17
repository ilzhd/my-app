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
    },
    login (email, password, rememberMe, captcha) {
        return instance.post(`auth/login`,{
            email,
            password,
            rememberMe,
            captcha

        })
            .then(response=>{
                return response.data
            })
    },
    logOut () {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    },
}
export const profileApi = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response =>{
                return response.data
            })
    },
    updateStatus (status) {
        return instance.put(`profile/status/`,{
            status
        })
            .then(response =>{
                return response.data
            })
    }
}

export const ToDoApi = {
    getTask() {
        return instance.get(`todo-lists/`)
            .then(response => {
                return response.data
            })
    },
    postTask(title) {
        return instance.post(`todo-lists/`, {
            title
        })
    },
    deleteTask(id) {
        return instance.delete(`todo-lists/${id}`)
    },
    editTask(id,title){
        return instance.put(`todo-lists/${id}`,{
            title
        })
            .then(response => {
                return response.data
            })
    }
}

export const appApi = {
    authMe () {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}