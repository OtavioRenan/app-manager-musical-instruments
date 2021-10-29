import { MessageSystemService } from 'src/app/services/message-system/message-system.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit
{
  public listUsers: Array<User> = [];

  ngOnInit(): void
  {
    this.getListsUser();
  }

  constructor(
    private userService: UserService,
    private messageSystemService: MessageSystemService,
  ){}

  async getListsUser()
  {
    await this.userService.all().subscribe(
      (users) => {
        this.listUsers = users;
      },
      (e) => {
        this.messageSystemService.error(e);
      }
    );
  }
}