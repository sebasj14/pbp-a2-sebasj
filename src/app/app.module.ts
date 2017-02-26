import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { CustomerComponent, CustomersComponent, CustomerService } from './customer';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, CustomerComponent, CustomersComponent],
  bootstrap: [AppComponent],
  providers: [CustomerService]
})
export class AppModule { }
