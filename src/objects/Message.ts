import User from './User'

class Message {
    constructor(
        private id: string,
        private user: User,
        private content: string,
        private updatedAt: string,
        private type: 'message' | 'file',
        private idFile?: string
    ) {
        this.id = id
        this.idFile = idFile
        this.type = type
        this.user = user
        this.content = content
        this.updatedAt = updatedAt
    }

    public get $id(): string {
        return this.id
    }
    public set $id(value: string) {
        this.id = value
    }

    public get $user(): User {
        return this.user
    }

    public set $user(value: User) {
        this.user = value
    }

    public get $content(): string {
        return this.content
    }

    public set $content(value: string) {
        this.content = value
    }

    public get $updatedAt(): string {
        return this.updatedAt
    }

    public set $updatedAt(value: string) {
        this.updatedAt = value
    }

    public get $type(): string {
        return this.type
    }

    public set $type(value: 'message' | 'file') {
        this.type = value
    }

    public get $idFile(): string | undefined {
        return this.idFile
    }

    public set $idFile(value: string) {
        this.idFile = value
    }
}

export default Message
