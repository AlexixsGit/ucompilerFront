import { User } from './../model/user';
export class UserSaveRequest {
    public user: User;
    public confirmPassword: string;
}