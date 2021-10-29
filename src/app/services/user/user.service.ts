import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/app/core/service';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService extends Service<User>
{
  protected readonly route: string = 'user';

  constructor(protected httpClient: HttpClient)
  {
    super(httpClient);
  }
}
