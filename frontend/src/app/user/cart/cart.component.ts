import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listPizzas!: any;
  list!: any;

  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.cartService.getPizza().subscribe(data => {
      this.listPizzas = data;
    });
  }

  deletePizza(pizzaName: string) {
    console.log(pizzaName);
    this.cartService.deleteCartPizza(pizzaName).subscribe(() => {
      this.openSnackBar('Pizza Deleted', 'Dismiss');
      this.getCart();
    })
  }

  // getTotal(){
  //   this.cartService.getPizza().subscribe(data => {
  //     this.list = data;
  //     let total=0;
  //     for(let i=0;i<this.list;i++){
  //       total+=(this.list.pizzaPrice)
  //     }
  //     return total;
  //   }); 
  // }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000,
      panelClass: ['snackbar']
    });
  }
}
