import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.forgetForm.controls; }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetForm.value, null, 4));
  }

}
