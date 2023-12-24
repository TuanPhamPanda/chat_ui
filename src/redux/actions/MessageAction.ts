import { Message } from "@/objects";
import { MessageType } from "../types";

export default class MessageAction{
    private _type: MessageType;
    private _payload: Message

    constructor(type: MessageType, payload: Message){
        this._type = type;
        this._payload = payload;
    }

    public get type():MessageType{
        return this._type;
    }

    public get payload():Message{
        return this._payload;
    }
}