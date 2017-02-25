import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
            { id: 1, name: 'SebasJ' },
            { id: 2, name: 'AlejaC' },
            { id: 3, name: 'BrianU' },
            { id: 4, name: 'CaroI' }
        ]
    }
}