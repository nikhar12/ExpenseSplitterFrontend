import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Cookie, CookieService} from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  public id: any;
  public expenselist: any;
  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
  });

    this.getAllExpenseInThisGroup(this.id);
  }

public getAllExpenseInThisGroup = (id) => {
 this.appService.getAllExpensesInGroup(id).subscribe((apiresponse) => {
  console.log('expenses' + apiresponse);
  this.expenselist = apiresponse;

});
}


}
