import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PartnercreateService} from "../partner-create/partnercreate.service";
@Component({
  selector: 'app-partner-create',
  templateUrl: './partner-create.component.html',
  styleUrls: ['./partner-create.component.scss']
})
export class PartnerCreateComponent implements OnInit {
  PartnerForm: FormGroup;
  constructor(private fb: FormBuilder,private _partnerCreate: PartnercreateService) { }
  

  ngOnInit() {
    this.PartnerForm = this.fb.group({
      PartnerName: ['', Validators.required],
      UserNames: ['' ,Validators.required],
      Password: ['', Validators.required],
      Mobile: ['' ,Validators.required],
      Email: ['', Validators.required],
      Address: ['' ,Validators.required],
      City: ['' ,Validators.required],
      Country: ['', Validators.required],
      PartnerId: ['' ,Validators.required],
      TpaId: ['' ,Validators.required],
      BrokerID: ['' ,Validators.required],

      PartnerCategory: ['' ,Validators.required],
      Status: ['' ,Validators.required],
      MedicalPlan: ['' ,Validators.required],
      PaymentM: ['' ,Validators.required],
      LifeInsurance: ['' ,Validators.required]
  });
  }
  SaveRecode() {    
    this._partnerCreate.OnSave(this.PartnerForm.value).then(function (res) {
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
