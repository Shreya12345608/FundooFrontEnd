import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token: any;
  // variable - default false
  show: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public snackBar: MatSnackBar, private activeRoute: ActivatedRoute, private user: UserService) { }
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0) {
      config.duration = duration;
    }
    this.snackBar.open(message, undefined, config);
  }
  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]

    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');

    //this.token = this.activeRoute.snapshot.params.token
  }
  // click event function toggle
  password() {
    this.show = !this.show;
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }
  onSubmit() {
    this.submitted = true;


    if (this.resetForm.invalid) {
      return;
    }
    if(this.resetForm.valid){
      this.openSnackBar('processing', 0); 
      let reqData ={
        newPassword: this.resetForm.value.password,
        confirmPassword: this.resetForm.value.confirmPassword
      }
      this.user.resetUser(this.token,reqData).subscribe(
        (response: any) => {
          this.openSnackBar('Password Reset SUccessfully ', 2000);
        },
        error => {
          if(error['status'] == 0){
            this.openSnackBar('Sending password reset link failed: server offline', 2000);
          }
          else{
            this.openSnackBar('Sending password reset link failed: ', 2000);
          }
        });
    } 
  }
}