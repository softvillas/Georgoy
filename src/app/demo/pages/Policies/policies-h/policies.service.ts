import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { bufferTime, distinctUntilChanged, filter, map, scan, share, take, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  http: HttpClient;
  Messages:string;
    constructor(http: HttpClient) { this.http = http; }
  
  
    getPoliciesList() {
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
        { id: 1, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'EX', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
        { id: 2, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'Self', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
        { id: 3, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'Self', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
        { id: 4, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'Self', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
        { id: 5, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'Self', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
        { id: 6, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'Self', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
        { id: 7, policyNumber: '01-115-11-19-6044842265', quotationNumber: 'E-1873852996', name: 'aaaaaaaaaaasfwe234254', totalPremium: '8396.40',effectiveDate:'15/09/2019', memberType: 'Self', createdOn: '15/09/2019',status: 'Active',referrer_name:'Submit',partner_name:'Submit',certificateBond:'Submit',receiptDetail:'Submit' },
    
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
