import { AuxData } from './auxData';
import { Volume } from './volume';
import { SubCategory } from './subCategory';
import { ParentEntity } from './parentEntity';
export class Problem extends ParentEntity {
    public title: string;
    public subCategory: SubCategory;
    public volume: Volume;
    public problemText: string;
    public inputDescription: string;
    public outputDescription: string;
    public inputExample: string;
    public outputExample: string;
    public attachedFile: string;
    public isPdf: AuxData;
    public complexity: AuxData;
}