public with sharing class CaseTriggerHandler {
    public static void beforeInsert (List<Case> newCases) {
        for (Case caseRecord : newCases) {
            string type = CaseIdGenerator.checkType(caseRecord);
            integer typeCount = CaseIdGenerator.getCaseCount(type);
            string typePrefix = CaseIdGenerator.getCasePrefix(type);
            string newCaseId = CaseIdGenerator.generateCaseId(typePrefix, typeCount);
            caseRecord.case_id__c = newCaseId;
            CaseIdGenerator.updateCaseCount(type, typeCount);
        }
    }
}