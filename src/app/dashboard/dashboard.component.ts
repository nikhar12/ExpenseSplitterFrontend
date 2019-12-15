import { Component, OnInit } from '@angular/core';
import {SocketService } from '../socket.service';
import { Cookie, CookieService} from 'ng2-cookies';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userInfo: any;
  public groups: [];
  public routerLinkVariable = '../creategroup';


  constructor(public ser: SocketService, public appservice: AppService, public cd: CookieService) {

   }

  ngOnInit() {
    this.getAllGroupsForUser();
  }

  public getAllGroupsForUser = () => {

    const userid = this.cd.get('userid');
    console.log('userid ' + userid);
    this.appservice.getAllGroupsForaUser(userid).subscribe((apiresponse) => {
      console.log('apiresponse: ' + apiresponse);
      this.groups = apiresponse;
      console.log('groups: ' + this.groups);
    });
  }




}
