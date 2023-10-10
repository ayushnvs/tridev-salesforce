import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType, createRecord } from 'lightning/uiObjectInfoApi';
import CASE_OBJECT from "@salesforce/schema/Case";

export default class CasesUI extends LightningElement {

    retrievedData;

    subject;
    description;
    statusValue;
    originValue;
    priorityValue;

    pickValStatus;
    pickValOrigin;
    pickValPriority;

    // @api recordId;
    // @api objectApiName; 
    
    // objectName; 

    @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
        accountMetadata;

    @wire(getPicklistValuesByRecordType, { 
            recordTypeId : '$accountMetadata.data.defaultRecordTypeId',
            objectApiName : CASE_OBJECT
        }) 
        wiredRecordTypeInfo({data, error}) {
            if(data) {
                console.log(' getPicklistValuesByRecordType Info : ', data);
                this.pickValStatus = data.picklistFieldValues.Status.values;
                this.pickValOrigin = data.picklistFieldValues.Origin.values;
                this.pickValPriority = data.picklistFieldValues.Priority.values;
            }
            if(error) {
                console.log('Error Occurred : ', error);
            }
    }

    handleChange(event) {

        console.log('Name: ', event.field)

        // if (event.field.name == 'subject') {
        //     this.subject = event.field.value
        // }
        // if (event.field.name == 'description') {
        //     this.description = event.field.value
        // }
        // if (event.field.name == 'CaseStatus') {
        //     this.statusValue = event.field.value
        // }
        // if (event.field.name == 'CaseOrigin') {
        //     this.originValue = event.field.value
        // }
        // if (event.field.name == 'CasePriority') {
        //     this.priorityValue = event.field.value
        // }

        // this.retrievedData = this.subject + '\n' + this.description + '\n' + this.statusValue + this.priorityValue + this.originValueset
    }

}