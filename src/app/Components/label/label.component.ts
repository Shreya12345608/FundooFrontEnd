import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LabelService } from 'src/app/Services/label/label.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataservicesService } from 'src/app/Services/dataservices.service';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  change = false;
  createNewLabel = {};
  editfun = false;
  labelsList: any = []
  labelForm!: FormGroup;
  private createlabel = new FormControl('');

  constructor(private labelService: LabelService,
    private dataservice: DataservicesService,
    private matSnackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public labels: any,
    @Optional() private dialogRef: MatDialogRef<DashboardComponent>, private formBuilder: FormBuilder,) { }


  ngOnInit(): void {
    this.labelForm = this.formBuilder.group({
      labelName: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.dataservice.recievedMessage.subscribe(response => {
      this.labels = response;
    });

  }
  cleartext() {
    return this.labelForm.controls['labelName'].setValue('');
  }
 
  closeDialog() {
    this.dialogRef.close();

  }

  GetAllLabel() {
    this.labelService.GetAllLabel('Notes/GelLabel').subscribe((response: any) => {
      this.labels=response.data;
    console.log(response)
    // this.data.sendMessage(this.labels);
      })
  }


  createOneLabel() {
    this.editfun = false;
    if (this.labelForm.invalid) {
      return;
    }
    let data = {
      Label: this.labelForm.value.labelName
    }
    this.labelService.CreateLabel(data).subscribe((response: any) => {
      console.log(response);
      //this.labelForm.controls['LabelName'].setValue('');
      this.dataservice.sendMessage(response);
      this.matSnackBar.open('label Added Successsfully', 'close')._dismissAfter(2000);
    },
      (error: any) => {
        this.matSnackBar.open('Error while adding Label', 'close')._dismissAfter(2000);
        console.log(error);
      })
  }


  DeleteLabel(LabelId: any) {
    this.editfun = false;
    this.labelService.DeleteLabel(LabelId).subscribe(
      result => {
        this.matSnackBar.open('label successfully deleted.', 'close')._dismissAfter(2000);
        this.createlabel.reset();
      },
      error => {
        this.matSnackBar.open('Error label updation failed.', 'close')._dismissAfter(2000);
        console.log(error);
      }
    );
  }
}