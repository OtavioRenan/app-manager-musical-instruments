import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentTypeComponent } from './instrument-type/instrument-type.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'instrument-type', component: InstrumentTypeComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule
{

}
