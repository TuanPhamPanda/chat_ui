import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER_CHAT,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
