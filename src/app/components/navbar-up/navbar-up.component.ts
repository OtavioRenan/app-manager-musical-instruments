import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-up-component',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.scss']
})

export class NavbarUpComponent implements OnInit
{
  public userAuth: any;

  constructor()
  {
    this.getUserAuth()
  }

  ngOnInit(): void
  {
    
  }

  public logout() : void
  {
    // this.cookieService.deleteAll();
  }

  public getUserAuth() : void
  {
    // const user = JSON.parse(this.cookieService.get('user'));
    // if(user)
    // {
    //   this.userAuth = user;
    // }
    
  }
}
