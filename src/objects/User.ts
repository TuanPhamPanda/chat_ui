class User {
    private id: string
    private name: string
    private picture: string
    private familyName: string
    private givenName: string

    constructor(id: string, name: string, picture: string, familyName: string, givenName: string) {
        this.id = id
        this.name = name
        this.picture = picture
        this.familyName = familyName
        this.givenName = givenName
    }

    public get $id(): string {
        return this.id
    }

    public get $name(): string {
        return this.name
    }
    public get $picture(): string {
        return this.picture
    }

    public get $given_name(): string {
        return this.givenName
    }

    public get $family_name(): string {
        return this.familyName
    }

    public set $id(value: string) {
        this.id = value
    }

    public set $name(value: string) {
        this.name = value
    }

    public set $picture(value: string) {
        this.picture = value
    }

    public set $given_name(value: string) {
        this.givenName = value
    }

    public set $family_name(value: string) {
        this.familyName = value
    }
}

export default User
