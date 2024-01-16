class User {
    private _id: string
    private _name: string
    private _picture: string
    private _familyName: string
    private _givenName: string

    constructor(id: string, name: string, picture: string, familyName: string, givenName: string) {
        this._id = id
        this._name = name
        this._picture = picture
        this._familyName = familyName
        this._givenName = givenName
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }
    public get picture(): string {
        return this._picture
    }

    public get givenName(): string {
        return this._givenName
    }

    public get familyName(): string {
        return this._familyName
    }

    public set id(value: string) {
        this._id = value
    }

    public set name(value: string) {
        this._name = value
    }

    public set picture(value: string) {
        this._picture = value
    }

    public set givenName(value: string) {
        this._givenName = value
    }

    public set familyName(value: string) {
        this._familyName = value
    }
}

export default User
