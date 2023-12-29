/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../axios'

class UserApi {
    private prefixAuth: string = '/v1/auth'
    private prefixUser: string = '/v1/user'
    public async signInGoogle(user: any) {
        const response = await axios.post(`${this.prefixAuth}/signup-google`, { ...user })
        return response.data
    }

    public async getAllUsers() {
        const response = await axios.get(`${this.prefixUser}/`)
        return response.data
    }
}

export default new UserApi()
