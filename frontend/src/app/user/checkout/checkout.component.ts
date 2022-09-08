import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private _snackBar: MatSnackBar) { 
    this.checkoutForm = formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      locality: ['', Validators.required],
      district: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  checkout(){
    this.openSnackBar('Your Order is Successfully Placed','Dismiss');
    this.checkoutForm.reset();
    this.router.navigate(['/userhome']); 
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
