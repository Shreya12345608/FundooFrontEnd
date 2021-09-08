import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';
import { CollaborationService } from 'src/app/Services/collaboration/collaboration.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {
  colList = [];
  ReceiverMail = '';
  collabArray: any
  card:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private collab: CollaborationService, public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<CollaborationComponent>,) { }

  ngOnInit(): void {
    this.GetAllCollaboration()
  }

  close() {
    this.dialogRef.close();
  }
  GetAllCollaboration() {
    this.collab.GetAllCollaboration('Notes/GelCollaborators').subscribe((response: any) => {
      console.log(response);
      this.collabArray = response.data;
      //this.collabArray.reverse();
      console.log(this.collabArray);

    })
  }

  deleteCollaborator(collaba: any) {
    this.collab.DeleteCollaboration(collaba.collaborationId).subscribe(response => {
      console.log(response);
      this.snackBar.open("Collaboration Deleted Successfully.....", " ", { duration: 2000 });

      this.GetAllCollaboration();

    }, error => {
      console.log("Error occur while", error);
      this.snackBar.open("Error while Deleteing fail.....", " ", { duration: 2000 });
    })
  }

addCollaboration() {

  let data = {
    notesId: this.data.notesId,
    ReceiverMail: this.ReceiverMail,
  }
  console.log(data)
  console.log(" add note data ", data);
  if (this.ReceiverMail) {
    this.collab.CreateCollaboration(data).subscribe((response) => {
      console.log(response);
      this.ReceiverMail = "";
      this.snackBar.open("Collaboration Created Successfully.....", " ", { duration: 2000 });

      // window.location.reload();
    }, error => {
      console.log("error in register", error);
      this.snackBar.open("Creating Collaboration fail.....", " ", { duration: 2000 });
    })
  }
}
}
