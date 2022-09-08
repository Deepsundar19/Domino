import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminSignupComponent } from './signup/admin-signup/admin-signup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:MainPageComponent},  
  {path:'userLogin',component:LoginComponent},
  {path:'userSignup',component:SignupComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminSignup',component:AdminSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
