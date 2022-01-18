import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { BaseModel } from '../model/base.model';
import { HttpOptionsJson } from 'src/app/utils/HttpOptionsJson';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService<Model extends BaseModel>
{
  protected urlService: String;
  protected readonly httpOptions = HttpOptionsJson;
  protected readonly baseApiUrl: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private service: String
  ) {
    this.urlService = service;
  }

  public json() : Observable<Array<Model>>
  {
    return this.httpClient.get<Array<Model>>(this.baseApiUrl + this.urlService + ".json");
  }

  public all() : Observable<Array<Model>>
  {
    return this.httpClient.get<Array<Model>>(this.makerUrl());
  }
    
  public find($id: number) : Observable<Model>
  {
    return this.httpClient.get<Model>(this.makerUrl() + $id);
  }

  public save($model: Model) : Observable<Model>
  {
    const model = JSON.stringify($model);
    return this.httpClient.post<Model>(this.makerUrl(), model, this.httpOptions);
  }

  public update($id: number, $model: Model) : Observable<Model>
  {
    const model = JSON.stringify($model);
    return this.httpClient.put<Model>(this.makerUrl() + $id, model, this.httpOptions);
  }

  public saveOrUpdate($model: Model) : Observable<Model>
  {
    if ($model.id)
    {
      return this.update($model.id, $model);
    } else {
      return this.save($model);
    }
  }

  private makerUrl() : string
  {
    return this.baseApiUrl + this.urlService + '/'
  }
}
