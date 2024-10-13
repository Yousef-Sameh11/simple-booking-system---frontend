import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import { ResourceListComponent } from './component/resource-list/resource-list.component';

const routes: Routes = [
  {
    path:'',
    component:ResourceListComponent
  },
  {
    path:'booking',
    component:BookingformComponent
  },
  {
    path:'booking/:id',
    component:BookingformComponent
  },
  {
    path:'resources-list',
    component:ResourceListComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
