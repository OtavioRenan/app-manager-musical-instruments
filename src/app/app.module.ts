import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticationModule } from './autentication/autentication.module';
import { AutenticationRoutingModule } from './autentication/autentication-routing.module';
import { NavbarUpComponent } from './layout/navbar-up/navbar-up/navbar-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutenticationModule,
    AutenticationRoutingModule,    
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{

}
