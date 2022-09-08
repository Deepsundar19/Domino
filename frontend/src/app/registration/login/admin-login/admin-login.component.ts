import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Login } from 'src/app/interfaces/registration';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private registrationService: RegistrationService, private router: Router,private _snackBar: MatSnackBar) { 
    this.adminLoginForm = formBuilder.group({
      email: ['', [Validators.required,
                  Validators.email,
                  Validators.minLength(7),
                  Validators.maxLength(30)]],
      password: ['', [Validators.required,
                      Validators.minLength(7)]]
    });
  }

  ngOnInit(): void {
  }

  onLogin(){
    const newFormData:Login = {
      email: this.adminLoginForm.value.email,
      password: this.adminLoginForm.value.password
    };
    this.registrationService.authenticateAdmin(newFormData).subscribe(res=>{
      if(res.success){
        this.openSnackBar(res.message,'Dismiss');
      this.adminLoginForm.reset();
      this.router.navigate(['/adminhome']);
      }
    },(err) =>{
      this.openSnackBar("Admin not found", 'Dismiss');  
    });
  }

  openSnackBar(message: string,action: string) {
    this._snackBar.open(message,action,{
      horizontalPosition:'right',
      verticalPosition:'bottom',
      duration:3000,
      panelClass: ['snackbar'] 
    });
  }
}
