import ThemeType from '../types/ThemeType'

export default class ThemeAction {
    private _type: ThemeType
    private _payload: 'dark' | 'light'

    constructor(type: ThemeType, payload: 'dark' | 'light') {
        this._type = type
        this._payload = payload
    }

    public get type(): ThemeType {
        return this._type
    }

    public get payload(): 'dark' | 'light' {
        return this._payload
    }
}
