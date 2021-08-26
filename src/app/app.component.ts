import { routes } from './autentication/autentication-routing.module';
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
      this.router.navigate(['/']);
    } else{
      this.router.navigate(['/dashboard']);
    }
  }

  public isAutenticated() : boolean
  {
    let $token = JSON.parse(sessionStorage.getItem('token') || '');
    
    if($token)
    {
      return true;
    }

    sessionStorage.clear();
    return false;
  }
}
