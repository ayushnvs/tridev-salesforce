import { LightningElement, api, wire } from 'lwc';
import fromStatus from '@salesforce/apex/GetCasesClass.fromStatus';

export default class EscalatedCases extends LightningElement {
    @wire(fromStatus, {status: 'Escalated'})
    cases;

    get finalCases () {
        this.cases.data.field.forEach(record => {
            return record
            // record.url = `https://tridevinc-dev-ed.develop.lightning.force.com/lightning/r/Case/${record.Id}/view`
        });
    }

    // updateHref () {
    //     this.a.href = this.li.querySelector('p').textContent
    // }
}

// let test = new EscalatedCases()
// test.updateHref();