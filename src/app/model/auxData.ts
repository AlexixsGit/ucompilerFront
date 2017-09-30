import { AuxDataGroup } from './auxDataGroup';
import { ParentEntity } from './parentEntity';

export class AuxData extends ParentEntity {
    public auxName: string;
    public shortName: string;
    public auxDataGroup: AuxDataGroup;
    public auxOrder: Number;
}