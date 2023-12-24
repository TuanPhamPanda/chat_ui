class User {
    private id: string
    private name: string
    private picture: string
    private family_name: string
    private given_name: string

    constructor(id: string, name: string, picture: string, family_name: string, given_name: string) {
        this.id = id
        this.name = name
        this.picture = picture
        this.family_name = family_name
        this.given_name = given_name
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
        return this.given_name
    }

    public get $family_name(): string {
        return this.family_name
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
        this.given_name = value
    }

    public set $family_name(value: string) {
        this.family_name = value
    }
}

export default User
