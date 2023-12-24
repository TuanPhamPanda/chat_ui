import axios from '../axios'

class RoomApi {
    private prefix: string = '/v1/room'
    public async createRoom(roomName: string, userId: string) {
        const data = await axios.post(`${this.prefix}/create-room`, {
            roomName,
            userId
        })
        return data
    }

    public async inviteMemberRoom(roomName: string, userId: string) {
        const data = await axios.put(`${this.prefix}/invite-member-room`, {
            roomName,
            userId
        })
        return data
    }

    public async removeMemberRoom(roomName: string, userId: string) {
        const data = await axios.put(`${this.prefix}/chase-member-room`, { roomName, userId })
        return data
    }

    public async getAllRoomByIdUser(userId: string) {
        const data = await axios.get(`${this.prefix}/${userId}`)
        return data
    }

    public async deleteRoomById(roomId: string) {
        const data = await axios.delete(`${this.prefix}/${roomId}`)
        return data
    }

    public async getRoomById(roomId: string) {
        const data = await axios.get(`${this.prefix}/${roomId}`)
        return data
    }
}

export default new RoomApi()
