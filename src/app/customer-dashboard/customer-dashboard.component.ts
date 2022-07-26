import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerModel } from './customer-dash board.model';
import { ApiService } from './shared/api.service';



@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  formValue !: FormGroup;
  customerModelObj: CustomerModel = new CustomerModel();
  customerData !: any;
  showAdd!:boolean;
  showEdit!:boolean;
  constructor(private formbuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      totalAmount: ['']
    })
    this.getAllCustomer();
  }
  displayModal !: boolean;

  clickAddCustomer(){
    this.displayModal=true;
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }
  postCustomerDetails() {
    
    // this.customerModelObj.id = this.formValue.value.id;
    this.customerModelObj.firstName = this.formValue.value.firstName;
    this.customerModelObj.lastName = this.formValue.value.lastName;
    this.customerModelObj.email = this.formValue.value.email;
    this.customerModelObj.mobile = this.formValue.value.mobile;
    this.customerModelObj.totalAmount = this.formValue.value.totalAmount;

this.api.postCustomer(this.customerModelObj)
.subscribe(res =>{
  console.log(res);
  alert("Customer Added Successfully")
  let ref = document.getElementById('cancel')
  ref?.click();
  this.formValue.reset();
  this.getAllCustomer();
},
err=>{
  alert("Something Went Wrong");
})

}

  getAllCustomer() {
    this.api.getAllCustomer()
    .subscribe(res => {
this.customerData = res;
      })

  }
  deleteCustomer(row: any) {
    this.api.deletecustomer(row.id)
      .subscribe(res =>{
        alert("Customer Deleted");
    this.getAllCustomer()
  })
  }
  editCustomer(row: any){
    this.displayModal=true;
    this.showAdd=false;
    this.showEdit=true;
    this.customerModelObj.id = row.id;
    // this.formValue.controls[' id'].setValue(row.id);
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['totalAmount'].setValue(row.totalAmount);
    

}
updateCustomerDetails(){
  this.customerModelObj.id= this.formValue.value.id;
  this.customerModelObj.firstName = this.formValue.value.firstName;
  this.customerModelObj.lastName = this.formValue.value.lastName;
  this.customerModelObj.email = this.formValue.value.email;
  this.customerModelObj.mobile = this.formValue.value.mobile;
  this.customerModelObj.totalAmount = this.formValue.value.totalAmount;
 
  this.api.updateCustomer(this.customerModelObj,this.customerModelObj.id)
  .subscribe(res=>{
  alert("updated successfully");
  let cancel = document.getElementById('cancel');
  cancel?.click();
  this.formValue.reset();
  this.getAllCustomer();

      

        });



}
onAddClick() {
  this.formValue.reset();
  this.showAdd = true;
  this.showEdit = false;
}
  
}