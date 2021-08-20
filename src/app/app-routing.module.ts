import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetComponent } from './Components/reset/reset.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [{ path: 'Login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'forget', component: ForgetComponent },
{ path: 'reset-password/:token', component: ResetComponent },
{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
