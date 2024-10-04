import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./user.schema").UserDocument> & import("./user.schema").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    profile(user: any): any;
}
