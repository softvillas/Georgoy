import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { bufferTime, distinctUntilChanged, filter, map, scan, share, take, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PartnercreateService {
  http: HttpClient;
  Messages:string;
    constructor(http: HttpClient) { this.http = http; }

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
}
