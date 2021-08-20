import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  // variable - default false
  show: boolean = false;


  constructor(private formBuilder: FormBuilder, private user: UserService,public snackBar:MatSnackBar) { }

  // click event function toggle
  password() {
    this.show = !this.show;
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', Validators.required]
    })
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
       // stop here if form is invalid

    if(this.registerForm.invalid){
      return;
    }

    let requestData = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      userEmail: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
  
    //user object calling registeruser
    this.user.registerUser(requestData).subscribe(response => {console.log(response);
      this.snackBar.open("Registration successfull....."," ",{duration : 2000});   
    },error => {
      console.log("error in register",error);  
      this.snackBar.open("Registration fail....."," ",{duration : 2000});   
    });
  }
   // display form values on success
  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
