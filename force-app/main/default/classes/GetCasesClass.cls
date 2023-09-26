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
}