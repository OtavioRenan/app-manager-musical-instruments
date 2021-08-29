import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit
{ 
  private listUsers: Array<User> = [];

  ngOnInit() : void
  {
      
  }

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
  )
  {}

  private listsUser() : void
  {

  }
}