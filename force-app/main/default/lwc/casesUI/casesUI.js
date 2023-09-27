import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType, createRecord } from 'lightning/uiObjectInfoApi';

export default class CasesUI extends LightningElement {
    subject;
    description;
    statusValue;
    originValue;
    priorityValue;

    pickValStatus;
    pickValOrigin;
    pickValPriority;

    @api recordId;
    @api objectApiName; 
    
    objectName; 

    // @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
    //     accountMetadata;

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
}