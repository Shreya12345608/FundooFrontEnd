import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import {
  MatSnackBarConfig,
MatSnackBarHorizontalPosition,
MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  setAutoHide: boolean = false;
  autoHide: number = 10000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private formBuilder: FormBuilder,private user: UserService,public snackBar: MatSnackBar,) { }
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  } 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    let requestData = {
      userEmail: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.user.loginUser(requestData).subscribe(response =>{console.log(response);
    })
    if(this.loginForm.valid){
      this.openSnackBar('Login in...', 0);
      let reqData ={
        userEmail: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.loginUser(reqData).subscribe(
        (response: any) => {
          localStorage.setItem('FunDooNotesJWT', response['token']);
          this.openSnackBar('Login success', 2000);
         // console.log(response);
          //this.route.navigate(['Dashboard']);
          console.log(response);
        },
        error => {
          try {
            if(error['status'] == 0){
              this.openSnackBar('Login failed: server offline', 2000,);
            }
            else{
              this.openSnackBar('Login failed: ', 2000);
            }
            } 
            catch (error) {
          }
        });
    } 
  }
}