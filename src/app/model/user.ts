import { AuxData } from './auxData';
import { ParentEntity } from './parentEntity';
export class User extends ParentEntity {
    public userName: string;
    public completeName: string;
    public email: string;
    public userPassword: string;
    public birthdate: Date;
    public sex: AuxData;
    public userStatus: AuxData;
    public country: string;
    public institution: string;
    public courseCode: string;
    public photo: string;
    public isEmailConfirmed: AuxData;
    public isAdmin: AuxData;
    public isSuperAdmin: AuxData;
    public isPasswordTemp: AuxData;
}