import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService
{
  private readonly route: string = '/login';

  constructor(
    private http: HttpClient,
  ) { }

  public login(login: Login): Observable<any>
  {
    return this.http.post(`${env.url.api}auth${this.route}`, login);
  }
}
