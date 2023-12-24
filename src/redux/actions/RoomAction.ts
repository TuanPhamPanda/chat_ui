import { Room } from '@/objects'
import { RoomType } from '../types'

export default class RoomAction {
    private payload: Room
    private type: RoomType

    constructor(type: RoomType, payload: Room) {
        this.type = type
        this.payload = payload
    }

    public get $type(): RoomType {
        return this.type
    }

    public get $payload(): Room {
        return this.payload
    }
}
