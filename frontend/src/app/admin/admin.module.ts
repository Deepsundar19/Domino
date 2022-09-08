import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPizzaComponent } from './edit-pizza/edit-pizza.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AddPizzaComponent,
    EditPizzaComponent,
    AdminProfileComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Ng2SearchPipeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    SharedModule
    
  ]
})
export class AdminModule { }
