import { Category } from './category';
import { ParentEntity } from './parentEntity';
export class SubCategory extends ParentEntity {
    public subName: string;
    public description: string;
    public category: Category;
}