import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { GetAllArchiveComponent } from './Components/getAllArchive/get-all-archive/get-all-archive.component';
import { GetAllNoteComponent } from './Components/GetAllNote/get-all-note/get-all-note.component';
import { GetAllTrashComponent } from './Components/getAllTrash/get-all-trash/get-all-trash.component';
import { LoginComponent } from './Components/login/login.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
import { ResetComponent } from './Components/reset/reset.component';
import { SignupComponent } from './Components/signup/signup.component';
const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'forget', component: ForgetComponent },
{ path: 'reset-password/:token', component: ResetComponent },
{
  path: 'home', component: DashboardComponent, canActivate: [AuthenticationGuard],
  children: [

    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes', component: GetAllNoteComponent },
    { path: 'Reminder', component: ReminderComponent },
    { path: 'Archive', component: GetAllArchiveComponent },
    { path: 'Trash', component: GetAllTrashComponent },
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
