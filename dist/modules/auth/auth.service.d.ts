import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.schema';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
    register(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
