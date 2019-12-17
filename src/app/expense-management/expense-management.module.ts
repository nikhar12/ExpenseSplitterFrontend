import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';




@NgModule({
  declarations: [ViewExpenseComponent, CreateExpenseComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
  ]
})
export class ExpenseManagementModule { }
