import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public url = 'http://ec2-13-232-216-247.ap-south-1.compute.amazonaws.com:3000';

  constructor(public http: HttpClient) { }
/* methods for group management*/

public getAllUsersForAGroup(id): Observable<any> {
  const params = new HttpParams()
  .set('groupid', id);

  return this.http.post(`${this.url}/exsp/api/v1/group/getAllUsers`, params);
}

public getAllUsers(): Observable<any> {
return this.http.get(`${this.url}/exsp/api/v1/user/getallusers`);
}

public getAllExpensesInGroup(id): Observable<any> {
  const params = new HttpParams()
  .set('groupid', id);

  return this.http.post(`${this.url}/exsp/api/v1/group/expense`, params);
}
public createExpense(data): Observable<any> {

  const params = new HttpParams()
  .set('groupid', data.id)
  .set('totalExpense', data.amount )
  .set('totalPaidBy', data.totalPaidBy)
  .set('expensename', data.expensename)
  .set('createdby', data.createdby)
  .set('users', data.users);

  // console.log('data.users ' + data.users);
  return this.http.post(`${this.url}/exsp/api/v1/group/` + data.id + `/expense/create`, params);
}
public getAllUsersForExpense(id): Observable<any> {

  const params = new HttpParams()
  .set('expenseid', id);

  return this.http.post(`${this.url}/exsp/api/v1/expense/users`, params);
}
public createGroup(data): Observable<any> {
  const params = new HttpParams()
  .set('groupname', data.groupname)
  .set('createdby', data.createdby)
  .set('users', data.users);

  return this.http.post(`${this.url}/exsp/api/v1/group/create`, params);
}

/********************************/

public getAllGroupsForaUser(userid): Observable<any> {

return this.http.get(`${this.url}/exsp/api/v1/user/group/getallgroups/` + userid);
}


  public confirmPasswordAndProceed = (password) => {
    return this.http.post('/setnewpassword', password);
  }

  public checkEmail = (email) => {

    return this.http.get('/fpemail', email);
  }



  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) => {

    localStorage.setItem('userInfo', JSON.stringify(data));


  }
  public signup(data): Observable<any> {

    const params = new HttpParams()
    .set('email', data.email)
    .set('pass', data.password)
    .set('firstname', data.firstname)
    .set('lastname', data.lastname)
    .set('mobile', '1234236456');
    return this.http.post(`${this.url}/exsp/api/v1/user/signup`, params);

  }

  public signin(data): Observable<any> {

    const params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password);
    const result = this.http.post(`${this.url}/exsp/api/v1/user/login`, params);
    return result;

  }





}
