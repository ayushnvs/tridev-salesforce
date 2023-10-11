public with sharing class GetCasesClass {
    @AuraEnabled(cacheable=true)
    public static List<Case> fromStatus(string status) {
        try {
            return [
                SELECT Id, CaseNumber, Case_Id__c, Subject, Status, description
                FROM Case
                WHERE Status =: status
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> fromCaseId(string caseId) {
        try {
            return [
                SELECT CaseNumber, Case_Id__c, Subject, Status, description
                FROM Case
                WHERE Status =: caseId
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static Case createCase(string caseSubject, string caseDescription, string caseStatus, string caseOrigin, string caseType, string casePriority){
        try {
            Case caseRec = new Case(contactId='0035j00001ACAcTAAX',
                                    accountId='0015j000019tpLoAAI',
                                    status=caseStatus,
                                    type=caseType,
                                    subject=caseSubject,
                                    description=caseDescription,
                                    origin=caseOrigin,
                                    priority=casePriority);
            // caseRec.subject = caseSubject;
            // caseRec.status = caseStatus;
            // caseRec.origin = caseOrigin;
            // caseRec.type = caseType;
            // caseRec.priority = casePriority;

            insert caseRec;
            return caseRec;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}