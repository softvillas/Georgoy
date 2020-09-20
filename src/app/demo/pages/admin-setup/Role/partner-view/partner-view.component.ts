import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PartnerviewService} from "../partner-view/partnerview.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrls: ['./partner-view.component.scss']
})
export class PartnerViewComponent implements OnInit {
  public show:boolean = false;
  public Title:any = '';
  public buttonName:any = '';
  UserList=[] as any;
  UserForm: FormGroup;
  searchText;
  constructor(private router: Router,private _Partnerview: PartnerviewService, private fb: FormBuilder) { }
  ngOnInit() {
    this._Partnerview.getPartnerList() .subscribe(items => {
      console.log(items.list);
      this.UserList = items.list;
    });
    
  }
  
  Edit() {     
    this.Title="Edit User"; 
    this.buttonName="Update User";
    this.show = true;
}
Cancel()
{
  this.show=false;
}
UpdateRecode(UserID) {
    
  this._Partnerview.OnUpdate(this.UserForm.value).then(function (res) {
      this.user =res.user;
       if(res.status=="Success")
      {  
        this.toastr.success('Recode Save successful', 'Successful', { timeOut: 3000 });
      }
      else
      {
          this.toastr.warning('Recode Not Found', 'Error', { timeOut: 3000 });
      }
      
  }.bind(this), Error => {  console.log(Error)  });

}
}
