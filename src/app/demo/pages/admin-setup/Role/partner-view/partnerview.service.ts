import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { bufferTime, distinctUntilChanged, filter, map, scan, share, take, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PartnerviewService {
  http: HttpClient;
  Messages:string;
    constructor(http: HttpClient) { this.http = http; }

    getPartnerList() {
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
        { id: 1,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 2,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 3,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 4,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 5,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 6,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 7,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 8,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        { id: 9,partnerName: 'Abdel Kerim', partnerUser: 'hamza', emailId: 'a.hamza@takafulemarat.com', mobile: '0501135746', catagory: 'TPA', status: 'Active' },
        ];
       console.log(list);
     //let pageInfo: any = { RowCount: list.length }
      return of({ list });
    }
    OnUpdate(data) {    
      const options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ', 'Content-Type': 'application/json' }) };
      return new Promise((resolve, reject) => {
        this.http.put('URL',data,options)
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
