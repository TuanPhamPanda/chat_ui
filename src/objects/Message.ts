class Message{
    private id: string;
    private contentMessage: string;
    private updatedAt: string;

    constructor(id: string, contentMessage: string, updatedAt: string) {
        this.id = id;
        this.contentMessage = contentMessage;
        this.updatedAt = updatedAt
    }
    public get $id(): string {
        return this.id;
    }
    public set $id(value: string) {
        this.id = value;
    }
    public get $contentMessage(): string {
        return this.contentMessage;
    }
    public set $contentMessage(value: string) {
        this.contentMessage = value;
    }
    public get $updatedAt(): string {
        return this.updatedAt;
    }
    public set $updatedAt(value: string) {
        this.updatedAt = value;
    }
}

export default Message