import { Instrument } from './../../models/instrument.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/core/service';

@Injectable({
   providedIn: 'root'
})

export class InstrumentService extends Service<Instrument>
{
   protected readonly route = 'intrument';

   constructor(protected httpClient: HttpClient) {
      super(httpClient)
   }
}
