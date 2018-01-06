import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { CityService } from './Services/City-Service';
import { CustomerService } from './Services/Customer-Service';
import { CustomerComponent } from '../app/customer/customer.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CityService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
