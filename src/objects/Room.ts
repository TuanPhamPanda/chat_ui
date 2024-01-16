import Message from './Message'
import User from './User'

class Room {
    private _users: User[]
    private _messages: Message[]
    private _roomName: string
    private _updatedAt: string
    private _id: string
    private _background: string
    private _groupAvatar: string
    private _fileName: string
    private _description: string

    constructor(
        id: string,
        roomName: string,
        background: string,
        users: User[],
        messages: Message[],
        groupAvatar: string,
        fileName: string,
        updatedAt: string,
        description: string
    ) {
        this._id = id
        this._roomName = roomName
        this._background = background
        this._users = users
        this._messages = messages
        this._groupAvatar = groupAvatar
        this._fileName = fileName
        this._updatedAt = updatedAt
        this._description = description
    }

    public get id(): string {
        return this._id
    }
    public get roomName(): string {
        return this._roomName
    }
    public get background(): string {
        return this._background
    }
    public get users(): User[] {
        return this._users
    }
    public get messages(): Message[] {
        return this._messages
    }
    public get groupAvatar(): string {
        return this._groupAvatar
    }
    public get fileName(): string {
        return this._fileName
    }
    public get updatedAt(): string {
        return this._updatedAt
    }
    public get description(): string {
        return this._description
    }

    public set id(value: string) {
        this._id = value
    }
    public set roomName(value: string) {
        this._roomName = value
    }
    public set background(value: string) {
        this._background = value
    }
    public set users(value: User[]) {
        this._users = value
    }
    public set messages(value: Message[]) {
        this._messages = value
    }
    public set groupAvatar(value: string) {
        this._groupAvatar = value
    }
    public set fileName(value: string) {
        this._fileName = value
    }

    public set updatedAt(value: string) {
        this._updatedAt = value
    }

    public set description(value: string) {
        this._description = value
    }
}

export default Room
