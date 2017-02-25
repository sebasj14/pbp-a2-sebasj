import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers = [
        { id: 1, name: 'SebasJ' },
        { id: 2, name: 'AlejaC' },
        { id: 3, name: 'BrianU' },
        { id: 4, name: 'CaroI' }
    ]
    constructor() { }

    ngOnInit() { }
}