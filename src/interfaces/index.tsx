export interface ICustomber {
    id: number,
    vcode: string,
    name: string,
    status: string
}

export interface ISubscriber {
    id: number,
    msisdn: string,
    name: string,
    type: string
}

export interface ISpoc {
    id: number,
    name: string,
    msisdn: string,
    email: string,
    address: string
}