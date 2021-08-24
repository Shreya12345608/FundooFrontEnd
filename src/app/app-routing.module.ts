import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { LoginComponent } from './Components/login/login.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { ResetComponent } from './Components/reset/reset.component';
import { SignupComponent } from './Components/signup/signup.component';
import { TakeNotesComponent } from './TakeNotes/take-notes/take-notes.component';

const routes: Routes = [{ path: 'Login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'forget', component: ForgetComponent },
{ path: 'reset-password/:token', component: ResetComponent },
{ path: 'allnotes', component: NotesComponent },
{
  path: 'home', component: DashboardComponent,
  children: [
    { path: 'notes', component: NotesComponent },
  ]
},
{ path: '', redirectTo:"login", pathMatch:"full"},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
