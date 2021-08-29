import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "../material.module";
import { InstrumentTypeComponent } from "./instrument-type/component/instrument-type.component";
import { UserComponent } from "./user/component/user.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    declarations: [
        InstrumentTypeComponent,
        UserComponent,
    ],
    providers:[
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MainModule
{
}
