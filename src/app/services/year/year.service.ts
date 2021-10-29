import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/core/service';
import { Year } from 'src/app/models/year.model';

@Injectable({
  providedIn: 'root'
})

export class YearService extends Service<Year>
{
  protected readonly route = 'year';

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }
}
