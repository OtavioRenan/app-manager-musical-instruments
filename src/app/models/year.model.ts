import { Model } from "../core/model";

export class Year extends Model
{
    launch!: Date;
    end?: Date;
}