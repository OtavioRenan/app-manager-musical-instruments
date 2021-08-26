import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from './Model/login.model';
import { LoginService } from './Service/login-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit
{
  public formLogin: FormGroup = this.createForm();
  
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
  ) {}
    
  ngOnInit(): void
  {
  
  }

  public createForm()
  {
    return this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public enter() : void
  {
    const login: Login = this.formLogin.value;
    this.loginService.login(login).subscribe(
      (resp) => {
        if(resp)
        {
          sessionStorage.setItem('token', JSON.stringify(resp));
          this.router.navigate(['/dashboard']);
        } else {
          console.log(resp.status);
        }
      },
      (e) => {
        if(e.error.message)
        {
          this.toastr.error(e.error.message);
        } else {
          console.log(e);
        }
      }
    );
  }
}
