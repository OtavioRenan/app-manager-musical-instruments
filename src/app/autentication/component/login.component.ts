import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login/Model/login.model';
import { LoginService } from '../login/Service/login-service.service';
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
      userLogin: ['', [Validators.required]],
      userPassword: ['', [Validators.required]]
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
          this.router.navigate(['admin']);
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
