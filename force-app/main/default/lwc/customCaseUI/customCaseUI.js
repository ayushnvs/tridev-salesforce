import { LightningElement, api } from 'lwc';

export default class CustomCaseUI extends LightningElement {
    @api recordId

    // caseRecordId = `Case: ${this.recordId}`;

    get caseRecordId () {
        return 'Case: ' + this.recordId
    }
}