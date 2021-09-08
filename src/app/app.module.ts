import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { ForgetComponent } from './Components/forget/forget.component';
import { ResetComponent } from './Components/reset/reset.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SignupComponent } from './Components/signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GetAllNoteComponent } from './Components/GetAllNote/get-all-note/get-all-note.component';
import { TakeNotesComponent } from './Components/take-notes/take-notes.component';
import { NotesComponent } from './Components/Notes/notes/notes.component';
import { ReminderComponent } from './Components/Reminder/reminder/reminder.component';
import { FormsModule } from '@angular/forms';
import { DeleteNotesComponent } from './Components/Delete/delete-notes/delete-notes.component';
import { GetAllArchiveComponent } from './Components/getAllArchive/get-all-archive/get-all-archive.component';
import { GetAllTrashComponent } from './Components/getAllTrash/get-all-trash/get-all-trash.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DialogContentComponent } from './Components/dialog-content/dialog-content.component';
import {MatDialogModule} from '@angular/material/dialog';
import { IconComponent } from './Components/icon/icon.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
import { LabelComponent } from './Components/label/label.component';
import { CollaborationComponent } from './Components/collaboration/collaboration.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    SignupComponent,
    DashboardComponent,
    GetAllNoteComponent,
    TakeNotesComponent,
    NotesComponent,
    ReminderComponent,
    DeleteNotesComponent,
    GetAllArchiveComponent,
    GetAllTrashComponent,
    DialogContentComponent,
    IconComponent,
    SearchFilterPipe,
    LabelComponent,
    CollaborationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    
  ],
  providers: [  { provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
