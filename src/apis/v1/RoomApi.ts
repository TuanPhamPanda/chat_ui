import axios from '../axios'

class RoomApi {
    private prefix: string = '/v1/room'
    public async createRoom(roomName: string, userId: string) {
        const response = await axios.post(`${this.prefix}/create-room`, {
            roomName,
            userId
        })
        return response.data
    }

    public async inviteMemberRoom(roomName: string, userId: string) {
        const response = await axios.put(`${this.prefix}/invite-member-room`, {
            roomName,
            userId
        })
        return response.data
    }

    public async removeMemberRoom(roomName: string, userId: string) {
        const response = await axios.put(`${this.prefix}/chase-member-room`, { roomName, userId })
        return response.data
    }

    public async getAllRoomByIdUser(userId: string) {
        const response = await axios.get(`${this.prefix}/user/${userId}`)
        return response.data
    }

    public async deleteRoomById(roomId: string) {
        const response = await axios.delete(`${this.prefix}/${roomId}`)
        return response.data
    }

    public async getRoomById(roomId: string) {
        const response = await axios.get(`${this.prefix}/${roomId}`)
        return response.data
    }
}

export default new RoomApi()
