import { LightningElement, api, wire } from 'lwc';
import fromStatus from '@salesforce/apex/GetCasesClass.fromStatus';

export default class EscalatedCases extends LightningElement {

    @wire(fromStatus, {status: 'Escalated'})
    cases;

    renderedCallback() {
        this.template.querySelectorAll('li').forEach(item => {
            let url = item.querySelector('p').innerText
            item.querySelector('a').setAttribute('href', url)
        })
    }
}