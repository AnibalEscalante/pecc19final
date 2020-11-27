import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocionBasicScreenInfoComponent } from './promocion-basic-screen-info.component';

const routes: Routes = [
  {
    path:'',
    component: PromocionBasicScreenInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocionBasicScreenInfoRoutingModule { }
