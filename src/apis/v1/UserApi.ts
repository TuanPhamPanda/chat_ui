/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../axios'

class UserApi {
    private prefixAuth: string = '/v1/auth'
    private prefixUser: string = '/v1/user'
    public async signInGoogle(user: any) {
        const data = await axios.post(`${this.prefixAuth}/signup-google`, { ...user })
        return data.data
    }

    public async getAllUsers() {
        const data = await axios.get(`${this.prefixUser}/`)
        return data.data
    }
}

export default new UserApi()
