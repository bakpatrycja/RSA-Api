import jwt from 'jsonwebtoken';

import { UsersRepository } from '../repository/';

export class UsersService {
    private secret: string

    constructor(secret) {
        this.secret = secret
    }

    public checkCredentials(email: string, password: string): boolean {
        const usersRepository: UsersRepository = new UsersRepository();

        return usersRepository.findOne(email, password)
    }

    public generateToken(email: string): string {
        const token: string = jwt.sign(
            { data: email },
            this.secret,
            { expiresIn: Math.floor(Date.now() / 1000) + (5 * 60) }
        )

        return token
    }

    public getInfoFromToken (token : string): string {
        token = token.split(' ')[1]
        const decoded = jwt.decode(token, { complete: true })

        return decoded.payload.data
    }
}
