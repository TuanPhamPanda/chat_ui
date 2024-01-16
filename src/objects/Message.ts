import User from './User'

class Message {
    constructor(
        private _id: string,
        private _user: User,
        private _content: string,
        private _updatedAt: string,
        private _type: 'message' | 'file',
        private _fileSize?: number,
        private _idFile?: string,
        private _fileName?: string
    ) {
        this._id = _id
        this._idFile = _idFile
        this._type = _type
        this._user = _user
        this._content = _content
        this._updatedAt = _updatedAt
        this._fileSize = _fileSize
        this._fileName = _fileName
    }

    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }

    public get user(): User {
        return this._user
    }

    public set user(value: User) {
        this._user = value
    }

    public get content(): string {
        return this._content
    }

    public set content(value: string) {
        this._content = value
    }

    public get updatedAt(): string {
        return this._updatedAt
    }

    public set updatedAt(value: string) {
        this._updatedAt = value
    }

    public get type(): 'message' | 'file' {
        return this._type
    }

    public set type(value: 'message' | 'file') {
        this._type = value
    }

    public get idFile(): string | undefined {
        return this._idFile
    }

    public set idFile(value: string) {
        this._idFile = value
    }

    public set fileSize(value: number) {
        this._fileSize = value
    }
    public get fileSize(): number | undefined {
        return this._fileSize
    }

    public set fileName(value: string) {
        this._fileName = value
    }
    public get fileName(): string | undefined {
        return this._fileName
    }
}

export default Message
