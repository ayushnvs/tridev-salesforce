import { LightningElement } from 'lwc';

export default class IframeTest extends LightningElement {
    
    get fullUrl() {
        // let iframe = this.template.querySelector('iframe');
        // iframe.reload(); 
        return `https://www.perficient.com/`;
    }

}