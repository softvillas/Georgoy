import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { bufferTime, distinctUntilChanged, filter, map, scan, share, take, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  http: HttpClient;
Messages:string;
  constructor(http: HttpClient) { this.http = http; }


  getQuotationList() {
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
      { id: 1, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 2, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 3, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 4, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 5, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 6, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 7, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 8, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
      { id: 9, name: 'test', quotationNo:'E-9456807108' ,sponsonUID:'666666666666', email: 'a.rathor@takafulemarat.com',Dependents:'0', mobileNo: '0502554252', Status: 'Active', Creater: 'Muhammad umar', IsSponsor: 'yes',createdDate: '12/06/2018' },
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
