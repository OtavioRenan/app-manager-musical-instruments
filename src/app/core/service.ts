import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Model } from "./model";
import { httpOptionsJson } from "src/app/utils/http-options-json.util";

@Injectable({
    providedIn: 'root'
})

export abstract class Service<GenericModel extends Model>
{
  protected readonly route!: string;
  protected readonly api = environment.url.api;
  protected readonly httpOptions = httpOptionsJson;

  constructor(
    protected httpClient: HttpClient,
  ){}

  public all(): Observable<Array<GenericModel>>
  {
    return this.httpClient.get<Array<GenericModel>>(`${this.api + this.route}/`);
  }

  public find($id: number): Observable<GenericModel>
  {
    return this.httpClient.get<GenericModel>(`${this.api + this.route}/${$id}`);
  }

  private save($model: GenericModel): Observable<GenericModel>
  {
    const model = JSON.stringify($model);
    return this.httpClient.post<GenericModel>( `${this.api + this.route}/`, model, this.httpOptions);
  }

  private update($id: number, $model: GenericModel): Observable<GenericModel>
  {
    const model = JSON.stringify($model);
    return this.httpClient.post<GenericModel>(`${this.api + this.route}/${$id}`, model, this.httpOptions);
  }

  public saveOrUpdate($model: GenericModel): Observable<GenericModel>
  {
    if ($model.id)
    {
      return this.update($model.id, $model);
    } else {
        return this.save($model);
    }
  }
}