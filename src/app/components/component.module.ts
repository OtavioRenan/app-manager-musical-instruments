import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NavbarUpComponent } from './navbar-up/navbar-up.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavbarUpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class ComponentModule { }