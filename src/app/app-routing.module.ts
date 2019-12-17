import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user-management/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './user-management/signup/signup.component';
import { CreateNewComponent } from './group-management/create-new/create-new.component';
import {ViewGroupComponent} from './group-management/view-group/view-group.component';
import { CreateExpenseComponent } from './expense-management/create-expense/create-expense.component';
import { ViewExpenseComponent } from './expense-management/view-expense/view-expense.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'group/create',
  component: CreateNewComponent
},
{
  path: 'group',
  component: ViewGroupComponent
},
{
  path: 'user/login',
  component: LoginComponent
},
{
  path: 'user/signup',
  component: SignupComponent
},
{
  path: 'expense/create',
  component: CreateExpenseComponent
},
{
  path: 'group/expense',
  component: ViewExpenseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
