import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login} from 'src/app/interfaces/registration';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router, private _snackBar: MatSnackBar) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required,
      Validators.email,
      Validators.minLength(7),
      Validators.maxLength(30)]],
      password: ['', [Validators.required,
      Validators.minLength(7)]]
    });
  }

  ngOnInit(): void { }

  onLogin() {
    const newFormData:Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.registrationService.authenticateUser(newFormData).subscribe(res => {
      if (res.success) {
        this.openSnackBar(res.message, 'Dismiss');
        this.loginForm.reset();
        this.router.navigate(['/userhome']);
      }
    },
    (err) =>{
      this.openSnackBar("User not found", 'Dismiss'); 
    }
    );  
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
