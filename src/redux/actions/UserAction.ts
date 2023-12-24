import { User } from "@/objects";
import UserType from "../types/UserType";

export default class UserAction{
    private _type: UserType;
    private _payload: User

    constructor(type: UserType, payload: User){
        this._type = type;
        this._payload = payload;
    }

    public get type():UserType{
        return this._type;
    }

    public get payload():User{
        return this._payload;
    }
}