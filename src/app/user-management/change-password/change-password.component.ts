import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public newpassword: any;
  public new2password: any;

  constructor(public appservice: AppService) { }

  ngOnInit() {
  }

  public confirmPasswordAndProceed = () => {

    if (this.newpassword === this.new2password) {
    this.appservice.confirmPasswordAndProceed(this.newpassword);

    }
  }
}
