class Room {
    id: string
    roomName: string
    users: string[]
    background: string
    createdAt: string
    updatedAt: string

    constructor(
        id: string,
        roomName: string,
        users: string[],
        background: string,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id
        this.roomName = roomName
        this.users = users
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.background = background
    }

    public get $id(): string {
        return this.id
    }

    public get $roomName(): string {
        return this.roomName
    }

    public get $users(): string[] {
        return this.users
    }

    public get $background(): string {
        return this.background
    }

    public get $createdAt(): string {
        return this.createdAt
    }

    public get $updatedAt(): string {
        return this.updatedAt
    }
}

export default Room
