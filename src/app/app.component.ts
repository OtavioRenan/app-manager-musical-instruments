import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit
{
  constructor(private router: Router)
  {

  }

  ngOnInit()
  {
    if(this.isAutenticated())
    {
      this.router.navigate(['admin']);
    } else{
      this.router.navigate(['/']);
    }
  }

  public isAutenticated(): boolean
  {
    const $token = JSON.parse(sessionStorage.getItem('token') || '');

    if($token)
    {
      return true;
    } else {
      sessionStorage.clear();
      return false;
    }

  }
}
