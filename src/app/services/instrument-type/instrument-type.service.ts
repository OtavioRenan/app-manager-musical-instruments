import { InstrumentType } from './../../models/instrument-type.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/core/service';

@Injectable({
   providedIn: 'root'
})

export class InstrumentTypeService extends Service<InstrumentType>
{
   protected readonly route = 'intrument-type';

   constructor(protected httpClient: HttpClient) {
      super(httpClient)
   }
}
