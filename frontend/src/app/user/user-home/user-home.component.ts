import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { CartService } from 'src/app/service/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Cart } from 'src/app/interfaces/Cart';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  listPizzas!: any;

  searchText: any;
  searchBar!: FormGroup;
  searchFilter:any;

  constructor(private adminService: AdminService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private cartService: CartService,private _snackBar: MatSnackBar) {
    this.searchBar = formBuilder.group({
      searchBox: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.adminService.fetchPizza().subscribe(data => {
      this.listPizzas = data;
    });
  }

  onSearch() {
    this.searchText = this.searchBar.value.searchBox;
    console.log(this.searchText);
  }

  addToCart(item: Cart) {
    const data:Cart ={
      pizzaName:item.pizzaName,
      pizzaImage:item.pizzaImage,
      pizzaType:item.pizzaType,
      pizzaPrice:item.pizzaPrice,
      pizzaQuantity:"1"
    };
    console.log(data);
    this.cartService.addPizzaToCart(data).subscribe(() => {
      this.openSnackBar('pizza Added to Cart','Dismiss');
    })
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
