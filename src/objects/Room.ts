import Message from './Message'
import User from './User'

class Room {
    constructor(
        private id: string,
        private roomName: string,
        private background: string,
        private users: User[],
        private messages: Message[]
    ) {
        this.id = id
        this.roomName = roomName
        this.background = background
        this.users = users
        this.messages = messages
    }

    public get $id(): string {
        return this.id
    }
    public get $roomName(): string {
        return this.roomName
    }
    public get $background(): string {
        return this.background
    }
    public get $users(): User[] {
        return this.users
    }
    public get $messages(): Message[] {
        return this.messages
    }

    public set $id(value: string) {
        this.id = value
    }
    public set $roomName(value: string) {
        this.roomName = value
    }
    public set $background(value: string) {
        this.background = value
    }
    public set $users(value: User[]) {
        this.users = value
    }
    public set $messages(value: Message[]) {
        this.messages = value
    }
}

export default Room
