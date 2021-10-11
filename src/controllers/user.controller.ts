import {
    UsersService,
    RsaService
} from '../services/';

require('dotenv').config()
const { SECRET } = process.env

export class UsersController {
    public validateUser(email: string, password: string): boolean {
        const usersService: UsersService = new UsersService(SECRET);
        if(usersService.checkCredentials(email, password)) {
            return true
        }

        return false
    }

    public generateToken (email): string {
        const usersService: UsersService = new UsersService(SECRET);

        return usersService.generateToken(email)
    }

    public getRSAPair(request) {
        const rsaService: RsaService = new RsaService()
        const usersService: UsersService = new UsersService(SECRET);

        const authHeader: string = request.headers.authorization
        const data: string = usersService.getInfoFromToken(authHeader)

        return rsaService.generateRSApair(data)
    }
}
