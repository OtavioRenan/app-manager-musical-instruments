import { BaseModel } from "../core/model/base.model";

export interface UserModel extends BaseModel
{
    name: String,
    login: String,
}