import { Injectable } from '@angular/core';


import * as io from 'socket.io-client';

import {Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public url  = 'http://ec2-13-232-216-247.ap-south-1.compute.amazonaws.com:3000';
  // public url = 'http://localhost:3000';
  public socket;

  constructor(public http: HttpClient ) {
    this.socket = io(this.url);

   }


   public onlineUserList = () => {
    return new Observable((observer) => {
      this.socket.on('hello', (data) => {
        console.log(data);
        observer.next(data);
        });
    });
  }


  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end verifyUser

   public abc = () => {


     const  data = 'hoooooo';
     this.socket.emit('hoo', data);
   }
}
