import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "../material.module";
import { InstrumentTypeComponent } from "./instrument-type/instrument-type.component";
import { UserComponent } from "./user/user.component";
import { LoginService } from "../services/login/login-service.service";
import { LoginComponent } from 'src/app/pages/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [
        InstrumentTypeComponent,
        UserComponent,
        LoginComponent,
    ],
    providers: [
        LoginService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PagesModule
{
}
