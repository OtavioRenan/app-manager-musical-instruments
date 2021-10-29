import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/core/service';
import { Mark } from 'src/app/models/mark.model';

@Injectable({
  providedIn: 'root'
})

export class MarkService extends Service<Mark>
{
  protected readonly route = 'mark';

    constructor(protected httpClient: HttpClient) {
      super(httpClient)
    }
}
