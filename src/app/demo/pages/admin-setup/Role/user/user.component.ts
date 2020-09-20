import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user/user.service"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public show:boolean = false;
  public Title:any = '';
  public buttonName:any = '';
  UserList=[] as any;
  UserForm: FormGroup;
  searchText;
  constructor(private router: Router,private _user: UserService, private fb: FormBuilder) { }
  ngOnInit() {
    this._user.getUserList() .subscribe(items => {
      this.UserList = items.list;
    });
    this.UserForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['' ,Validators.required],
      Email: ['', Validators.required],
      RoleName: ['' ,Validators.required],
      UserName: ['', Validators.required],
      ContactNumber: ['' ,Validators.required],
      NoAttempt: ['' ,Validators.required],
      Locked: ['', Validators.required],
      Payment: ['' ,Validators.required],
      Product: ['' ,Validators.required],
      Password: ['' ,Validators.required],
  });
  }
  Create() {  
    this.Title="Create User"; 
    this.buttonName="Create User";   
      this.show = true;
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
SaveRecode(UserID) {
  if(UserID)
  {
    this._user.detailUser(this.UserForm.value).then(function (res) {
      this.user =res.user;
       if(res.status=="Success")
      {  
        this.toastr.success('Recodesuccessful Update', 'Successful', { timeOut: 3000 });
      }
      else
      {
          this.toastr.warning('Recode Not Found', 'Error', { timeOut: 3000 });
      }
      
  }.bind(this), Error => {  console.log(Error)  });
  }
  else
  {
  this._user.OnSave(this.UserForm.value).then(function (res) {
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
}
