import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';
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

  constructor(private formBuilder: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, private user: UserService) { }

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
    let requestData = {
      newPassword: this.resetForm.value.password,
      confirmPassword: this.resetForm.value.confirmPassword
    }
    if (this.token != null) {
      this.user.resetUser(this.token, requestData).subscribe(response => console.log(response));
    }

    // onSubmit() {
    //   this.submitted = true;
    //   console.log(this.token);

    //   // stop here if form is invalid
    //   if (this.resetForm.invalid) {
    //     return;
    //   }

    //   // display form values on success
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value, null, 4));
  }
}