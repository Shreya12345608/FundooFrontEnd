import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { LoginComponent } from './Components/login/login.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
import { ResetComponent } from './Components/reset/reset.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [{ path: '', redirectTo: 'Login', pathMatch: 'full' },
{ path: 'Login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'forget', component: ForgetComponent },
{ path: 'reset-password/:token', component: ResetComponent },
{
  path: 'home', component: DashboardComponent,  canActivate: [AuthenticationGuard],
  children: [

    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes', component: NotesComponent },
    { path: 'Reminder', component: ReminderComponent },
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
