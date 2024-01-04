import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER_CHAT,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

// Sửa đổi cấu hình trị mặc định sau khi tạo ra instance
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.interceptors.response.use(
    (response) => {
        return response
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
