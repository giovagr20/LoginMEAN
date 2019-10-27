export interface IJwtResponse {
    dataUser:{
        id: number,
        name: string,
        email: string,
        accessToken: string,
        expireIn: string
    }
}
