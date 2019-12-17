import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Cookie, CookieService} from 'ng2-cookies';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {


  public id: any;
  public users = [];
  public expName: any;
  public amount: any;
  public room: any;

  constructor(private route: ActivatedRoute, private appService: AppService, public socketService: SocketService) { }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.room = params['r'];
  });

    this.getAllUsersForExpense(this.id);
    this.socketService.init(this.room);
    this.socketService.recvBroadcast().subscribe((apiresponse) => {
      console.log('apiresponmse: ' + apiresponse);
    });
  }

  public getAllUsersForExpense = (id) => {

    this.appService.getAllUsersForExpense(id).subscribe((apiresponse) => {
      console.log('apiresponseuserofexp: ' + apiresponse.users[0].socketroom);
      this.users = apiresponse.users;
      this.amount  = apiresponse.amount;
      this.expName  = apiresponse.expensename;
    //  console.log('users: ' + this.users);
    });
  }

}
