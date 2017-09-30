import { Problem } from './problem';
import { User } from './user';
import { ParentEntity } from './parentEntity';

export class AnalysisLog extends ParentEntity {
    public user: User;
    public problem: Problem;
    public algorithm: string;
}