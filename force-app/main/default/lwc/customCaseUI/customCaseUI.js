import { LightningElement, api } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import bootstrap from '@salesforce/resourceUrl/bootstrap';

export default class CustomCaseUI extends LightningElement {
    @api recordId

    // caseRecordId = `Case: ${this.recordId}`;

    get caseRecordId () {
        return 'Case'
    }

    // renderedCallback() {

    //     Promise.all([
    //         loadStyle(this, bootstrap + '/bootstrap-5.3.2-dist/css/bootstrap.min.css'),
    //         loadScript(this, bootstrap + '/bootstrap-5.3.2-dist/js/bootstrap.js'),
    //         // loadScript(this, popper),
    //         // loadScript(this, jquery)     
    //     ])
    //     .then(() => {
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Success',
    //                 message: 'Third-Party Libraries Loaded',
    //                 variant: 'success',
    //             }),
    //         );
    //     })
    //     .catch(error => {
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Error Loading Third-Party Libraries',
    //                 message: error.message,
    //                 variant: 'error',
    //             }),
    //         );
    //     });
    // }
}