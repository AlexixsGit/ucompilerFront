import { Problem } from './problem';
import { ParentEntity } from './parentEntity';
export class InitPage extends ParentEntity {
    public description: string;
    public howStart: string;
    public weekProblem: Problem;
    public imageFolder: string;
}