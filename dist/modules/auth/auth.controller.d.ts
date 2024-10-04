import { AuthService } from './auth.service';
declare class LoginDto {
    email: string;
    password: string;
}
declare class RegisterDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    profile(req: any): Promise<any>;
}
export {};
