import { AuxData } from './auxData';
import { Problem } from './problem';
import { User } from './user';
import { ParentEntity } from './parentEntity';
export class CompilationLog extends ParentEntity {
    public user: User;
    public problem: Problem;
    public algorithm: string;
    public resultMessage: string;
    public compStatus: AuxData;
}