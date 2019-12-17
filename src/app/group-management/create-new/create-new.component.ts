import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Cookie, CookieService} from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  public userid: any;
  public name: any;
  public description: any;
 public userslist: any;
 public selectedusers: any;

  constructor(public appservice: AppService, public cook: CookieService, public router: Router) {
  }

  ngOnInit() {
this.getAllUsers();
  }

  public getAllUsers = () => {
    this.appservice.getAllUsers().subscribe((apiresponse) => {
    this.userslist = apiresponse;
    });

  }

  public create = () => {

    let u = this.cook.get('userid');

    // this.selectedusers.push(u);
    console.log('arr: ' + this.selectedusers);
    const data = {
      groupname: this.name,
      createdby: u,
      users: this.selectedusers
    };

    this.appservice.createGroup(data).subscribe((apiresponse) => {
      console.log('groupid: ' + apiresponse.groupid);

      this.router.navigate(['/dashboard']);

    });
  }
}
