import { Model } from "src/app/core/model";

export class User extends Model
{
    login!: string;
    name!: string;
}