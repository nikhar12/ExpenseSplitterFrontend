import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';
import { CookieService } from 'ng2-cookies';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  public expenseName: any;
  public amount: any;
  public amountPaidBy: any;
  public createdBy: any;
  public id: any;
  public userid: any;
  public allGroupUsers: any;
  public selectedUsers: any;



  constructor(public appService: AppService, public route: Router, public actRoute: ActivatedRoute, public cookieService: CookieService,
              public socket: SocketService) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
  });
    this.userid = this.cookieService.get('userid');
    this.createdBy = this.userid;
    this.getAllUsersForGroup(this.id);
  }

  public getAllUsersForGroup = (id) => {
    this.appService.getAllUsersForAGroup(id).subscribe((apiresponse) => {
    console.log('group' + apiresponse);
    this.allGroupUsers = apiresponse.users;
    });
  }

  public createExpense = () => {
   //// console.log('selectedUsers' + this.selectedUsers);
  //  console.log('allGroupUsers' + this.allGroupUsers);

   const data = {
     id: this.id,
     amount: this.amount,
     totalPaidBy: this.amountPaidBy,
     createdby: this.createdBy,
     expensename: this.expenseName,
     users: this.selectedUsers
   };
   console.log('data users' + data.users);
   this.appService.createExpense(data).subscribe((apiresponse) => {
    if (apiresponse) {
      console.log('createexp api response: ' + apiresponse);
      // this.socket.init(apiresponse.users[0].socketroom);
      // this.socket.recvBroadcast();
      this.route.navigate(['/group/expense'], { queryParams: { id: this.id, r: apiresponse.users[0].socketroom } });
    }

    });
  }

}
