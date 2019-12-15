import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public email: any;
  public messageText: any;
  constructor(public appservice: AppService) { }

  ngOnInit() {
  }

  public checkEmail = () => {

  const res = this.appservice.checkEmail(this.email);
  this.messageText = res;
  }
}
