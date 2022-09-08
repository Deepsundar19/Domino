import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  listPizzas!: any;
  // searchedPizza!:any;

  searchText: any;
  searchBar!: FormGroup;

  searchFilter: any;

  constructor(private adminService: AdminService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.searchBar = formBuilder.group({
      searchBox: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza() {
    this.adminService.fetchPizza().subscribe(data => {
      this.listPizzas = data;
    });
  }

  deletePizza(pizzaName: string) {
    this.adminService.deletePizza(pizzaName).subscribe(() => {
      this.openSnackBar('Pizza Deleted', 'Dismiss');
      this.getPizza();
    });
  }

  onSearch() {
    this.searchText = this.searchBar.value.searchBox;
    console.log(this.searchText);
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
