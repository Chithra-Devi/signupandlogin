import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:'', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'leave', component: LeaveComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
