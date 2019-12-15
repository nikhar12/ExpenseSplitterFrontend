import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  public name: any;
  public description: any;
 public userslist: any;

  constructor(public appservice: AppService) {
  }

  ngOnInit() {
  }

  public getAllUsers = () => {
    this.userslist = this.appservice.getAllUsersOnline();

  }

  public createNewGroup = () => {
  }
}
