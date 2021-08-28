import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login } from '../Model/login.model';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class LoginService
{

  private readonly PATH: String = '/login';

  constructor(
    private http: HttpClient,
  ) { }

  public login(login: Login) : Observable<any>
  {
    return this.http.post(env.baseApiUrl + this.PATH, login);
  }
}
