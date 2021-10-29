import { MessageSystemService } from './../../services/message-system/message-system.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login/login-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit
{
  public formLogin: FormGroup = this.createForm();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private messageSystemService: MessageSystemService,
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

  public enter(): void
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
        this.messageSystemService.error(e);
      }
    );
  }
}