import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(email: string): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    create(email: string, password: string): Promise<User>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
}
