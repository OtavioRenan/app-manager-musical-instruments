import { ModelModel } from './model.model';
import { InstrumentType } from './instrument-type.model';
import { Model } from "../core/model";
import { Mark } from './mark.model';

export class Instrument extends Model
{
    name!: string;
    slug!: string;
    description?: string;
    instrumentType?: InstrumentType;
    model?: ModelModel
    mark?: Mark;
}