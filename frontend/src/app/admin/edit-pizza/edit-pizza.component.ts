import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PizzaDetails } from 'src/app/interfaces/Pizza';


@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.css']
})
export class EditPizzaComponent implements OnInit {

  editPizza!: FormGroup;

  constructor(private adminService: AdminService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,private _snackBar: MatSnackBar) {
    this.editPizza = formBuilder.group({
      pizzaName: ['', Validators.required],
      pizzaType: ['', Validators.required],
      pizzaPrice: ['', Validators.required],
      pizzaImage: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  editPizzas() {
    const newFormData:PizzaDetails = {
      pizzaName: this.editPizza.value.pizzaName,
      pizzaType: this.editPizza.value.pizzaType,
      pizzaPrice: this.editPizza.value.pizzaPrice,
      pizzaImage: this.editPizza.value.pizzaImage.replace('C:\\fakepath\\', '')
    };

    const pizzaName:string | null = this.activatedRoute.snapshot.paramMap.get('pizzaName');

    this.adminService.editPizza(pizzaName, newFormData).subscribe((res) => {
      this.openSnackBar('Pizza Updated','Dismiss');
      this.editPizza.reset();
      this.router.navigate(['/adminhome']);
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

