import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Signup } from 'src/app/interfaces/registration';


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  adminSignupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private registrationService: RegistrationService, private _snackBar: MatSnackBar) {
    this.adminSignupForm = formBuilder.group({
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
      name: this.adminSignupForm.value.name,
      email: this.adminSignupForm.value.email,
      phone: this.adminSignupForm.value.phone,
      password: this.adminSignupForm.value.password,
      confirmPassword: this.adminSignupForm.value.confirmPassword,
    };

    if (newFormData.password === newFormData.confirmPassword) {
      this.registrationService.createAdminSignupDetails(newFormData).subscribe((res) => {
        if (res.success) {
          this.openSnackBar(res.message, 'Dismiss');
          this.adminSignupForm.reset();
          this.router.navigate(['/adminLogin']);
        }
      }, (err) => {
        this.openSnackBar("Admin is already exist", 'Dismiss');
      });

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
