import { LightningElement, api, wire } from 'lwc';
import fromStatus from '@salesforce/apex/GetCasesClass.fromStatus';

export default class EscalatedCases extends LightningElement {
    @wire(fromStatus, {status: 'Escalated'})
    cases;
}