import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';

const routes: Routes = [
  {path:'adminhome',component:AdminHomeComponent},
  {path:'addPizza',component:AddPizzaComponent},
  {path:'editPizza/:pizzaName',component:EditPizzaComponent},
  {path:'search/:searchItem',component:AdminHomeComponent},
  {path:'adminProfile',component:AdminProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
