import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuotationService} from "../create-quotation/create-quotation.service"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-quotation',
  templateUrl: './create-quotation.component.html',
  styleUrls: ['./create-quotation.component.scss']
})
export class CreateQuotationComponent implements OnInit {

  public show:boolean = false;
  public Title:any = '';
  public buttonName:any = '';
  QutationList=[] as any;
  searchText;
  UserForm: FormGroup;
  constructor(private router: Router,private _qutation: QuotationService, private fb: FormBuilder) { }
  ngOnInit() {
    this._qutation.getQuotationList() .subscribe(items => {
      this.QutationList = items.list;
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
    this.Title="Create Quotation"; 
    this.buttonName="Create Quotation";   
      this.show = true;
  }
  Edit() {     
    this.Title="Edit Quotation"; 
    this.buttonName="Update Quotation";
    this.show = true;
}
Cancel()
{
  this.show=false;
}
SaveRecode(UserID) {
  if(UserID)
  {
    this._qutation.detailUser(this.UserForm.value).then(function (res) {
      this.QutationList =res.user;
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
  this._qutation.OnSave(this.UserForm.value).then(function (res) {
      this.QutationList =res.user;
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
