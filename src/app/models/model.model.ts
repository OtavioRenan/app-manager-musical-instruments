import { Model } from "../core/model";
import { Year } from "./year.model";

export class ModelModel extends Model
{
    name!: string;
    slug!: string;
    year?: Year;
}