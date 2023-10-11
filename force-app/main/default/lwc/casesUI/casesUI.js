import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType, createRecord } from 'lightning/uiObjectInfoApi';
import CASE_OBJECT from "@salesforce/schema/Case";
import createCase from '@salesforce/apex/GetCasesClass.createCase';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CasesUI extends LightningElement {

    subject;
    description;
    statusValue;
    originValue;
    typeValue;
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
        recordTypeId: '$accountMetadata.data.defaultRecordTypeId',
        objectApiName: CASE_OBJECT
    })
    wiredRecordTypeInfo({ data, error }) {
        if (data) {
            console.log(' getPicklistValuesByRecordType Info : ', data);
            this.pickValStatus = data.picklistFieldValues.Status.values;
            this.pickValOrigin = data.picklistFieldValues.Origin.values;
            this.pickValPriority = data.picklistFieldValues.Priority.values;
            this.pickValType = data.picklistFieldValues.Type.values;
        }
        if (error) {
            console.log('Error Occurred : ', error);
        }
    }

    handleChange(event) {
        if (event.target.name == 'subject') {
            this.subject = event.target.value
        }
        if (event.target.name == 'description') {
            this.description = event.target.value
        }
        if (event.target.name == 'CaseStatus') {
            this.statusValue = event.target.value
        }
        if (event.target.name == 'CaseOrigin') {
            this.originValue = event.target.value
        }
        if (event.target.name == 'CaseType') {
            this.typeValue = event.target.value
        }
        if (event.target.name == 'CasePriority') {
            this.priorityValue = event.target.value
        }
    }

    handleCreate() {

        createCase({caseSubject: this.subject, caseStatus: this.statusValue, caseOrigin: this.originValue, caseType: this.typeValue, casePriority: this.priorityValue}).then(record => {
            console.log('Record Created', record)
            // const toastEvent = new ShowToastEvent({
            //     title:'Success!',
            //     message:'Account created successfully',
            //     variant:'success'
            // });
            // this.dispatchEvent(toastEvent);
        }).catch(err => {
            console.log(error);
        })


        // console.log('Updating Salesforce Database!!')
        // fields = {
        //     'subject': this.subject,
        //     'description': this.description,
        //     'status': this.statusValue,
        //     'origin': this.originValue,
        //     'priority': this.priorityValue,
        //     'contact_Id': ''
        // }

        // const recordInput = {
        //     apiName: CASE_OBJECT.objectApiName,
        //     fields: fields
        // }

        // console.log('Updating Salesforce - Database!!')
        // createRecord(recordInput).then((record) => {
        //     console.log(record.Id);
            // const toastEvent = new ShowToastEvent({
            //     title:'Success!',
            //     message:'Account created successfully',
            //     variant:'success'
            // });
            // this.dispatchEvent(toastEvent);
        // });

    }

}


