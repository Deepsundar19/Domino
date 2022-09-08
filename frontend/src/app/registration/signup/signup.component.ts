import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Signup } from 'src/app/interfaces/registration';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private registrationService: RegistrationService, private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) {
    this.signupForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.email,
      Validators.minLength(7),
      Validators.maxLength(30)]],
      password: ['', [Validators.required,
      Validators.minLength(7)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const newFormData: Signup = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      phone: this.signupForm.value.phone,
      password: this.signupForm.value.password,
      confirmPassword: this.signupForm.value.confirmPassword,
    };

    if (newFormData.password === newFormData.confirmPassword) {
      this.registrationService.createUserSignupDetails(newFormData).subscribe((res) => {
        if (res.success) {
          this.openSnackBar(res.message, 'Dismiss');
          this.signupForm.reset();
          this.router.navigate(['/userLogin']);
        }
      }, (error) => {
        this.openSnackBar("User is already exist", 'Dismiss');
      }
      );

    } else {
      this.openSnackBar("password is not matching", 'Dismiss');
    }

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: ['snackbar']
    });
  }

}
