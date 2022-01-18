import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';
import { InstrumentTypeModel } from 'src/app/models/instrument-type.model';

@Injectable({
    providedIn: 'root'
})

export class InstrumentTypeService extends BaseService<InstrumentTypeModel>
{
    constructor(
        httpClient: HttpClient
    )
    {
        super(httpClient, '/instrument-type');
    }  
}