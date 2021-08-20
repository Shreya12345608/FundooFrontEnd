import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarConfig} from '@angular/material/snack-bar';
  
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private user: UserService,public snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.forgetForm.controls; }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  }
  
  onSubmit() {
    if(this.forgetForm.valid){
      this.openSnackBar('Processing', 2000); 
      let reqData ={
        userEmail: this.forgetForm.value.email
      }
      this.user.forgetUser(reqData).subscribe(
        (response: any) => {
          this.openSnackBar('Password reset link has been sent to your Email', 2000);
        },
        error => {
          if(error['status'] == 0){
            this.openSnackBar('Sending password reset link failed: Server offline', 2000,);
          }
          else{
            this.openSnackBar('Sending password reset link failed ', 2000);
          }
        });
    } 
  }
}
