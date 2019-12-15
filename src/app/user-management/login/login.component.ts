import { Component, OnInit } from '@angular/core';
import { Cookie, CookieService} from 'ng2-cookies';
import { HttpParams, HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;


    constructor(public http: HttpClient, public appservice: AppService, public router: Router,
                public cookieService: CookieService) { }

  ngOnInit() {
  }



  public signin = () => {

    const data = {
      email: this.email,
      password: this.password
    };

    this.appservice.signin(data).subscribe((apiresponse) => {
      console.log('loginApiresponse: ' + apiresponse);
      if (apiresponse) {
       this.cookieService.set( 'userid', apiresponse.userid );
       this.router.navigate(['/dashboard']);
      }
    });
  }

}
