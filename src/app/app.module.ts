import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticationModule } from './autentication/autentication.module';
import { AutenticationRoutingModule } from './autentication/autentication-routing.module';
import { NavbarUpComponent } from './layout/admin/navbar-up/navbar-up.component';
import { AdminComponent } from './layout/admin/admin.component';
import { MainModule } from './main/main.module';
import { MainRoutingModule } from './main/main-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUpComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutenticationModule,
    AutenticationRoutingModule,    
    MainModule,
    MainRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),

    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{

}
