import { PagesRoutingModule } from './pages/pages-rounting.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    AppRoutingModule,
    PagesModule,
    PagesRoutingModule,
    ComponentModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule
{

}
