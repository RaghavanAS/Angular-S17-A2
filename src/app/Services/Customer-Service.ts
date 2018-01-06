import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerService {
  // CustomerList array of customer
  CustomerList: Customer[]= [];
  constructor() {}
  // returns the CustomerList
  getCustomerList(): Customer[] {
    return this.CustomerList;
  }
  // Stores a customer to the CustomerList
  storeCustomer(customer: Customer) {
      this.CustomerList.unshift(customer);
      console.log(this.CustomerList);
  }
}
