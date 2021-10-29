import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/core/service';
import { ModelModel } from 'src/app/models/model.model';

@Injectable({
  providedIn: 'root'
})

export class ModelService extends Service<ModelModel>
{
  protected readonly route = 'model';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
}
