import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public mobile: any;
  public lastname: any;
  public firstName: any;
  public email: any;
  public password: any;
  constructor(public appservice: AppService) { }

  ngOnInit() {
  }


  public signup = () => {
    const data = {
      firstName: this.firstName,
      lastname: this.lastname,
      mobile: this.mobile,
      email: this.email,
      password: this.password

    };
    return this.appservice.signup(data).subscribe((apiresponse) => {

      console.log(apiresponse);

    });
  }
}
