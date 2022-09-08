import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PizzaDetails } from 'src/app/interfaces/Pizza';


@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  addPizza!: FormGroup;

  constructor(private adminService:AdminService ,private formBuilder: FormBuilder, private router: Router,private _snackBar: MatSnackBar) {
    this.addPizza = formBuilder.group({
      pizzaName: ['', Validators.required],
      pizzaType: ['', Validators.required],
      pizzaPrice: ['', Validators.required],
      pizzaImage: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  addPizzas(){
    const newFormData:PizzaDetails = {
      pizzaName:this.addPizza.value.pizzaName,
      pizzaType:this.addPizza.value.pizzaType,
      pizzaPrice:this.addPizza.value.pizzaPrice,
      pizzaImage:this.addPizza.value.pizzaImage.replace('C:\\fakepath\\','')
    };
    this.adminService.addPizza(newFormData).subscribe({
      next: (res) =>{
        this.openSnackBar('Pizza Added','Dismiss');
        this.addPizza.reset();
        this.router.navigate(['/adminhome']);
      }
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
