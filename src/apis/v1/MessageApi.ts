import axios from '../axios'

class MessageApi {
    private prefix = '/v1/message'
    public async createMessage(idUser: string, idRoom: string, contentMessage?: string, file?: File) {
        const data = await axios.post(`${this.prefix}/`, { idUser, contentMessage, idRoom, file })
        return data
    }

    public async getMessageByIdRoomAndIdUser(idRoom: string, idUser: string) {
        const data = await axios.post(`${this.prefix}/${idRoom}`, { idUser })
        return data
    }

    public async updateMessage(
        idMessage: string,
        idRoom: string,
        idUser: string,
        contentMessage?: string,
        file?: { file: File; idFile: string }
    ) {
        const data = await axios.put(`${this.prefix}/${idMessage}`, {
            idRoom,
            idUser,
            contentMessage,
            file: file?.file,
            idFile: file?.idFile
        })
        return data
    }

    public async deleteMessage(idMessage: string, idRoom: string, idUser: string) {
        const data = await axios.delete(`${this.prefix}/${idMessage}`, {
            data: {
                idRoom,
                idUser
            }
        })
        return data
    }

    public async getAllMessageByIdRoom(idRoom: string) {
        const response = await axios.get(`${this.prefix}/${idRoom}`)
        return response.data
    }
}

export default new MessageApi()
