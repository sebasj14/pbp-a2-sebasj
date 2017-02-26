import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        //Rx Observable version with subscribe
        this._customerService.getCustomers_RxObservable()
            .subscribe((customers) => this.customers = customers,
                        (err) => console.log(err));

        //Promise to array
        // this._customerService.getCustomers()
        //     .then((customers) => this.customers = customers)
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // Promise <any[]>
        // this.customers = this._customerService.getCustomers()
        //     .catch((err) => {
        //         console.log(err);
        //     });

        //Rx Observable version    
        // this.customers = this._customerService.getCustomers_RxObservable()
        //     .catch((err) => {
        //         console.log(err);
        //         return Observable.of([true]);
        //     });
    }
}