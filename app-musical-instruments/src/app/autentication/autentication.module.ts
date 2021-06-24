import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login.component';
import { LoginService } from "./login/Service/login-service.service";
import { MaterialModule } from "../material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    declarations: [
        LoginComponent,
    ],
    providers:[
        LoginService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AutenticationModule
{
}
