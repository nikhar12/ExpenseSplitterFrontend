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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent}
      ])
  ],
  providers: [CookieService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
