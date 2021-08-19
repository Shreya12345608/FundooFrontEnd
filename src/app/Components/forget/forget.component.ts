import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private user: UserService) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.forgetForm.controls; }

  
  onSubmit() {
    this.submitted = true;
    if(this.forgetForm.invalid){
      return;
    }
    
    let requestData = {
      userEmail: this.forgetForm.value.email
    }
    this.user
    this.user.forgetUser(requestData).subscribe(response =>{console.log(response);
    })
    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetForm.value, null, 4));
  }

}
