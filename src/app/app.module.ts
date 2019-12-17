import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementModule } from './user-management/user-management.module';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { GroupManagementModule } from './group-management/group-management.module';
import { Cookie, CookieService} from 'ng2-cookies';

import { ExpenseManagementModule } from './expense-management/expense-management.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    UserManagementModule,
    GroupManagementModule,
    ExpenseManagementModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
