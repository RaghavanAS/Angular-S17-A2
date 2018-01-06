import { Component, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { JsonPipe } from '@angular/common';

import { CityService } from '../Services/City-Service';
import { Customer } from '../model/customer';
import { CustomerService } from '../Services/Customer-Service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // Citylist and CustomerList array
  cityList: string[] = [];
  customerList: Customer[] = [];
  // customer instance
  customer: Customer =  new Customer();
  form: FormGroup;
  @Input() showDetail = false;
  // constructor dependency injection
  constructor(private cityService: CityService, private formBuilder: FormBuilder, private customerService: CustomerService) {
    this.createForm();
  }
  // validating the form using formbuilder
  // Included validation for email
  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose( [Validators.required, Validators.pattern('[A-Za-z]*')])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'),
      Validators.minLength(10), Validators.maxLength(10)])],
      email: ['', Validators.compose( [Validators.required, Validators.email])],
      city: ['', Validators.required],
      DOB: ['', Validators.compose([Validators.required, Validators.pattern(
        '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))'
      )])]
    });
  }
  // initializing the form on ngOnInit and calling the service
  ngOnInit() {
    this.customer.name = 'Enter your Name';
    this.customer.email = 'Joe@email.com';
    this.customer.phone = 'Enter contact #';
    this.cityList = this.cityService.getCityList();
    this.customerList = this.customerService.getCustomerList();
    this.customer.DOB = 'Enter the date';
  }
  // on form submit calling the onSave method to add a customer using Customer Service
  onSave(Values) {
    this.customer.name = Values.name;
    this.customer.email = Values.email;
    this.customer.phone = Values.phone;
    this.customer.city = Values.city;
    this.customer.DOB = Values.DOB;
    this.customerService.storeCustomer(this.customer);
    this.customer = new Customer();
    this.showDetail = true;
    }
  }
