import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { bufferTime, distinctUntilChanged, filter, map, scan, share, take, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
Messages:string;
  constructor(http: HttpClient) { this.http = http; }


  getUserList() {
    //console.log('getNotisOfficerList ::::::::::::::::: ');
  /* API CALL */
   /*
    return this.http.get<any>('Base URL')
      .pipe(
        map((resp: any) => {
        //console.log('List resp :::::::::::::::::::: ',resp);
         const list = resp.list;
          
          return { list};
        }),
        tap({
          error: () => {this.Messages="Error In Getting Recode"},
          complete: () => {this.Messages="Found the Recode"}
        })
      );
    */
    // TEMPORARY HARDCODED
    let list: any = [     
      { id: 1, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 2, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 3, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 4, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 5, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 6, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 7, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 8, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 9, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
      { id: 10, firstName: 'Abdel Kerim', lastName: 'hamza', emailId: 'a.hamza@takafulemarat.com', roleName: 'Customer Service', status: 'Active', createdBy: 'Muhammad danish',createdDate: '12/06/2018' },
     ];
   //let pageInfo: any = { RowCount: list.length }
    return of({ list });
  }
  OnSave(data) {    
    const options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ', 'Content-Type': 'application/json' }) };
    return new Promise((resolve, reject) => {
      this.http.post('URL',data,options)
        .subscribe(response => {

          resolve(response);
        }, err => {
          resolve(err);
        }
        );
    });
  }
  detailUser(id){
    const options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ', 'Content-Type': 'application/json' }) };
    return new Promise((resolve, reject) => {
      this.http.get('URL' +id,options)
        .subscribe(response => {

          resolve(response);
        }, err => {
          resolve(err);
        }
        );
    });        
  }

}
