import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService<UserModel>
{
  protected readonly rotaApiPadrao = '/user';

  constructor(
    httpClient: HttpClient
  )
  {
    super(httpClient);
  }
}